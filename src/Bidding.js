import React, { Component } from 'react';
  
export class Bidding extends Component {

  render() {
    return (
      <div className="panel card rounded shadow-sm">
        <div className="card-head">
          <h2 className="app-head">Bids</h2>
        </div>
        <div className="card-body">
          {this.props.countrylist.map(
            country =>
            <div className="app-bid rounded draft">
                <span className="app-bid-status">{country.name === '' ? 'open': country.name}</span>
            </div>
          )}
        </div>
      </div>
        );
    }
}
