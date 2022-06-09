import ReactCountryFlag from 'react-country-flag';
import React, { Component } from 'react';


export class Activity extends Component {
  render() {
    return (
      <table className="table">
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
            <td><ReactCountryFlag countryCode="US" svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">00</td>
            <td className="text-center"><span className="badge bg-success">Open</span></td>
            <td className="text-end">
              <button>
                Save
              </button>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="US" svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">00</td>
            <td className="text-center"><span className="badge bg-danger">Counter</span></td>
            <td className="text-end">
              <button>
                Save
              </button>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="AU" svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">00</td>
            <td className="text-center"><span className="badge bg-success">Open</span></td>
            <td className="text-end">
              <button>
                Save
              </button>
            </td>
          </tr>
          <tr>
            <td><ReactCountryFlag countryCode="AU" svg /> Country name</td>
            <td className="text-end">000,000,000,000</td>
            <td className="text-end">000,000,000</td>
            <td className="text-center">00</td>
            <td className="text-center"><span className="badge bg-success">Open</span></td>
            <td className="text-end">
              <button>
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
        );
    }
}
