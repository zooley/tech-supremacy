import React from 'react'

const d = new Date();
let year = d.getFullYear();

let progress = 25;
let gdp = '000,000,000,000';
let units = '000,000,000';
let freedom = '0.00';
const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

const Header = () => {
  return (
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
  )
}

export default Header