import ReactCountryFlag from 'react-country-flag';
import React, { Component } from 'react';
import save from './img/star.png'

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
        <tbody>
          <tr>
            <td><ReactCountryFlag countryCode="US" svg /> Country name</td>
            <td>000,000,000,000</td>
            <td>000,000,000</td>
            <td>00</td>
            <td><span className="badge badge-pill bg-success">Open</span></td>
            <td>
                <img src={save} alt='save'/>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="US" svg /> Country name</td>
            <td>000,000,000,000</td>
            <td>000,000,000</td>
            <td>00</td>
            <td><span className="badge badge-pill bg-danger">Counter</span></td>
            <td>
              <img src={save} alt='save'/>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="AU" svg /> Country name</td>
            <td>000,000,000,000</td>
            <td>000,000,000</td>
            <td>00</td>
            <td><span className="badge badge-pill bg-success">Open</span></td>
            <td>
              <img src={save} alt='save'/>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="AU" svg /> Country name</td>
            <td>000,000,000,000</td>
            <td>000,000,000</td>
            <td>00</td>
            <td><span className="badge badge-pill bg-success">Open</span></td>
            <td>
              <img src={save} alt='save'/>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
      );
    }
}
