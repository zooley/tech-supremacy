import React, { Component } from 'react';


export class Bidding extends Component {
  render() {
    return (
      <div className="panel card rounded shadow-sm">
        <div className="card-body d-flex flex-column">
          <h2 className="app-head">Bids</h2>

          <div className="app-bid rounded draft">
            <span className="app-bid-status">Counter</span>
          </div>

          <div className="app-bid rounded won">
            <span className="app-bid-status">Won</span>
          </div>
          <div className="app-bid rounded pending">
            <span className="app-bid-status">Pending</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>
          <div className="app-bid rounded open">
            <span className="app-bid-status">Open</span>
          </div>

        </div>
      </div>
        );
    }
}
