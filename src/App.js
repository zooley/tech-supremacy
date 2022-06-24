import ReactCountryFlag from 'react-country-flag';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Newsfeed } from './Newsfeed';
import Bidding from './Bidding';
import { Activity } from './Activity';
import { GameOver } from './GameOver';
import './css/App.css';
import { useState } from 'react';
import Header from './Components/Header';
import DraftBid from './Components/DraftBid';

let complete = false;


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const country = {
    countryCode: '',
    name: '',
    status: 'open'
};

function App() {
  const [bidList, setBidList] = useState({
      countryList: Array(10).fill(country),
      count : 0
  })

  const [draftPanel, setDraft] = useState(false);

  function statusScore(status) {
    switch (status) {
      case "counter":
        return 5;
      case "pending":
        return 4;
      case "won":
        return 3;
      case "lost":
        return 2;
      case "drafted":
        return 1;
      default:
        return 0;
    }
  }
  
  function compare(a, b) {
    if (statusScore(a.status) > statusScore(b.status)) {
      return -1;
    }
    else if (statusScore(a.status) < statusScore(b.status)) {
      return 1;
    }
    else if (a.name < b.name) {
      return -1;
    }
    else if (a.name > b.name) {
      return 1;
    }
    else {
      return 0;
    }
  }

  function addBid(data) {
    if (bidList.count < 10) {
      const newCountryList = [...bidList.countryList];
      newCountryList[bidList.count] = {countryCode:data.countryCode, name: data.name, status: data.status };
      newCountryList.sort(compare);
      setBidList({
        countryList: newCountryList,
        count: bidList.count + 1
      });
    }
  }

  function removeBid(data) {
    const newCountryList = [...bidList.countryList];
    let idx = newCountryList.findIndex(function (ele) { return ele.name === data.name });
    newCountryList.splice(idx, 1)
    setBidList({
      countryList: [...newCountryList, country],
      count: bidList.count - 1
    })
  }

  function closeDraft() {
    setDraft(false);
  }

  function openDraft() {
    setDraft(true);
  }

  if (complete) {
    return <GameOver />;
  }
  return (
    <div className="app flex-column">
      <Header />
      <main className="app-main">
        {draftPanel === false ? <div className="app-news pane"> <Newsfeed /> </div> : <div/>}
        <div className="app-activity">
          <div className="app-map">
            <ComposableMap width={1000} height={490}>
              <Geographies geography={geoUrl} fill="#344c68" stroke="#adb5c7" strokeWidth={0.5}>
                {({ geographies }) =>
                  geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                }
              </Geographies>
            </ComposableMap>
          </div>
          <div className="app-available">
            <Activity addBid={addBid} removeBid={removeBid} />
          </div>
        </div>
        {draftPanel === false ?
          <div className="app-bids pane">
            <Bidding countrylist={bidList.countryList} openDraft={openDraft} />
          </div>
          : <div className='app-bids list'>
            <DraftBid countryList={bidList.countryList} closeDraft={closeDraft} />
          </div>}
      </main>
    </div>
  );
}

export default App;
