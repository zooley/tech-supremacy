import ReactCountryFlag from 'react-country-flag';
import React, { Component } from 'react';


export class Activity extends Component {
  render() {
    return (
      <table className="bids-table">
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col" className="text-end">Purchase Amount</th>
            <th scope="col" className="text-end">Market Size</th>
            <th scope="col" className="text-center">Freedon Score</th>
            <th scope="col" className="text-center">Status</th>
            <th scope="col" className="text-end">Save for later</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><ReactCountryFlag countryCode="US" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">0 <span className="badge rounded-pill bg-secondary">(un)free</span></td>
            <td className="text-center"><span className="badge rounded-pill bg-danger">Counter</span></td>
            <td className="text-end">
              <button className="btn">
                <span className="icn icn-star" aria-hidden="true"></span>
                <span className="sr-only visually-hidden">Save</span>
              </button>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="US" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">0 <span className="badge rounded-pill bg-secondary">(un)free</span></td>
            <td className="text-center"><span className="badge rounded-pill bg-danger">Counter</span></td>
            <td className="text-end">
              <button className="btn">
                <span className="icn icn-star" aria-hidden="true"></span>
                <span className="sr-only visually-hidden">Save</span>
              </button>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="AU" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">0 <span className="badge rounded-pill bg-secondary">(un)free</span></td>
            <td className="text-center"><span className="badge rounded-pill bg-danger">Counter</span></td>
            <td className="text-end">
              <button className="btn">
                <span className="icn icn-star" aria-hidden="true"></span>
                <span className="sr-only visually-hidden">Save</span>
              </button>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="AU" style={{
              width: '2.5em',
              height: '2.5em',
            }} svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">0 <span className="badge rounded-pill bg-secondary">(un)free</span></td>
            <td className="text-center"><span className="badge rounded-pill bg-danger">Counter</span></td>
            <td className="text-end">
              <button className="btn">
                <span className="icn icn-star" aria-hidden="true"></span>
                <span className="sr-only visually-hidden">Save</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
        );
    }
}
