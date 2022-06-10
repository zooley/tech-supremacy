import ReactCountryFlag from "react-country-flag";
import React, { Component } from 'react';


export class Bidding extends Component {
  render() {
    return (
      <div className="panel card rounded-start shadow-sm">
        <div className="card-body d-flex flex-column">
          <h2 className="app-head">Bids</h2>

          <div className="app-bid rounded draft">
            <span className="app-bid-status"><ReactCountryFlag countryCode="AU" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> CTY: Counter</span>
          </div>

          <div className="app-bid won">
            <span className="app-bid-status"><ReactCountryFlag countryCode="GB" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> CTY: Won</span>
          </div>
          <div className="app-bid pending">
            <span className="app-bid-status"><ReactCountryFlag countryCode="FR" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> CTY: Pending</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status"><ReactCountryFlag countryCode="IT" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> CTY: Open</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid open">
            <span className="app-bid-status">Open</span>
          </div>

        </div>
      </div>
        );
    }
}
