import React, { Component, useState } from 'react';
import CountryData from './Components/CountryData'
export class Activity extends Component {

  render() {
    return (
      <div className='tableFixHead'>
      <table>
        <thead>
          <tr>
            <th scope="col">COUNTRY NAME</th>
            <th scope="col">PURCHASE AMOUNT</th>
            <th scope="col">MARKET SIZE</th>
            <th scope="col">FREEDOM SCORE</th>
            <th scope="col">STATUS</th>
            <th scope="col">SAVE FOR LATER</th>
          </tr>
        </thead>
          <CountryData dataArr={this.props.dataArr} addBid={this.props.addBid} removeBid={this.props.removeBid} />
        </table>
      </div>
      );
    }
}
