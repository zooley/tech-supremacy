import ReactCountryFlag from 'react-country-flag';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Newsfeed } from './Newsfeed';
import { Bidding } from './Bidding';
import { Activity } from './Activity';
import { GameOver } from './GameOver';
import './css/App.css';
import { useState } from 'react';

const d = new Date();
let year = d.getFullYear();

let complete = false;
let progress = 25;
let gdp = '000,000,000,000';
let units = '000,000,000';
let freedom = '0.00';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

const country = {
    name: '',
    status: ''
};

function App() {
  const [bidList, setBidList] = useState({
      countryList: Array(10).fill(country),
      count : 0
  })
  
  function addBid(data) {
    if (bidList.count < 10) {
      const newCountryList = [...bidList.countryList];
      newCountryList[bidList.count] = { name: data.name, status: data.status };
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

  if (complete) {
    return <GameOver />;
  }
  return (
    <div className="app flex-column">
      <header className="app-header rounded-bottom">
        <h1 className="sr-only visually-hidden">Tech Sumpremacy</h1>
        <div className="app-stage">
          <h2 className="app-head">
            <span className="app-year">{year}</span> &bull; <span className="app-season">{seasons[0]}</span>
          </h2>
        </div>
        <div className="app-progress">
          <div className="progress">
            <div class="milestone one"></div>
            <div class="milestone two"></div>
            <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="app-timer">
          00:00:00
        </div>
        <div className="app-gdp">
          <span className="app-head">GDP</span><br />
          <span className="app-value">{gdp}</span> <span className="app-unit text-muted">USD</span>
        </div>
        <div className="app-units">
          <span className="app-head">Units Producible</span><br />
          <span className="app-value">{units}</span> <span className="app-unit text-muted">Units</span>
        </div>
        <div className="app-freedom">
          <span className="app-value">{freedom}</span><br />
          <span className="app-head">(un)free</span>
        </div>
      </header>
      <main className="app-main">
        <div className="app-news pane">
          <Newsfeed />
        </div>
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
        <div className="app-bids pane">
          <Bidding countrylist={bidList.countryList} />
        </div>
      </main>
    </div>
  );
}

export default App;
