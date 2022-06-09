import ReactCountryFlag from 'react-country-flag';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Newsfeed } from './Newsfeed';
import { Bidding } from './Bidding';
import { Activity } from './Activity';
import { GameOver } from './GameOver';
import './css/App.css';

const d = new Date();
let year = d.getFullYear();

let complete = false;
let progress = 25;
let gdp = '000,000,000';
let units = '000,000,000';
let freedom = '0.00';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

function App() {
  if (complete) {
    return <GameOver />;
  }
  return (
    <div className="app d-flex flex-column">
      <header className="app-header shadow-sm rounded-bottom d-flex">
        <h1 className="sr-only visually-hidden">Tech Sumpremacy</h1>
        <div className="app-stage flex-fill">
          <h2 className="app-head">
            <span className="app-year">{year}</span> &bull; <span className="app-season">{seasons[0]}</span>
          </h2>
        </div>
        <div className="app-progress flex-fill">
          <div className="progress">
            <div class="milestone one"></div>
            <div class="milestone two"></div>
            <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="app-timer">
          00:00:00
        </div>
        <div className="app-gdp flex-fill">
          <span className="app-head">GDP</span><br />
          <span className="app-value">{gdp}</span> <span className="app-unit text-muted">USD</span>
        </div>
        <div className="app-units flex-fill">
          <span className="app-head">Units Producible</span><br />
          <span className="app-value">{units}</span> <span className="app-unit text-muted">Units</span>
        </div>
        <div className="app-freedom flex-fill">
          <span className="app-head">{freedom}</span><br />
          <span className="app-value">(un)free</span>
        </div>
      </header>
      <main className="app-main d-flex">
        <div className="app-news pane">
          <Newsfeed />
        </div>
        <div className="app-activity flex-grow-1 d-flex flex-column">
          <div className="app-map flex-grow-1">
            <ComposableMap>
              <Geographies geography={geoUrl} fill="#999999" stroke="#f5f5f5" strokeWidth={0.5}>
                {({ geographies }) =>
                  geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                }
              </Geographies>
            </ComposableMap>
          </div>
          <div className="app-available">
            <Activity />
          </div>
        </div>
        <div className="app-bids pane">
          <Bidding />
        </div>
      </main>
    </div>
  );
}

export default App;
