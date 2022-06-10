import ReactCountryFlag from "react-country-flag";
import React, { Component } from 'react';


export class Newsfeed extends Component {
  render() {
    let progress = 56;

    return (
      <div className="panel card rounded-end shadow-sm">
            <div className="card-body d-flex flex-column">
              <h2 className="app-head">Newsfeed</h2>

              <div className="app-news-item flex-fill domestic my-3">
                <h3 className="app-news-title">Domestic Affairs</h3>
                <div className="app-news-body">
                  <p>Technology deal offered to TARGET, awaiting response.</p>
                </div>
              </div>

              <div className="app-news-item flex-fill international my-3">
                <h3 className="app-news-title">International Affairs</h3>
                <div className="app-news-body">
                  <p>TARGET begins technology trade negotiations.</p>
                </div>
              </div>

              <div className="app-news-item flex-fill leaderboard">
                <h3 className="card-title">Global Market Leaders</h3>
                <ol className="list-group list-group-numbered list-group-flush">
                  <li className="list-group-ite d-flex justify-content-between align-items-start px-0">
                    <div className="ms-2 flex-fill">
                  <div className="app-country"><ReactCountryFlag countryCode="US" style={{
                    width: '2.5em',
                    height: '2.5em',
                  }} svg /> United States</div>
                      <div className="app-progress">
                        <div className="progress">
                          <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="app-freedom-indicator free"><span className="sr-only visually-hidden">(un)free</span></div>
                  </li>
                  <li className="list-group-ite d-flex justify-content-between align-items-start px-0">
                    <div className="ms-2 flex-fill">
                  <div className="app-country"><ReactCountryFlag countryCode="AU" style={{
                    width: '2.5em',
                    height: '2.5em',
                  }} svg /> Australia</div>
                      <div className="app-progress">
                        <div className="progress">
                          <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="app-freedom-indicator unfree"><span className="sr-only visually-hidden">(un)free</span></div>
                  </li>
                  <li className="list-group-ite d-flex justify-content-between align-items-start px-0">
                    <div className="ms-2 flex-fill">
                  <div className="app-country"><ReactCountryFlag countryCode="CH" style={{
                    width: '2.5em',
                    height: '2.5em',
                  }} svg /> Switzerland</div>
                      <div className="app-progress">
                        <div className="progress">
                          <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="app-freedom-indicator unfree"><span className="sr-only visually-hidden">(un)free</span></div>
                  </li>
                  <li className="list-group-ite d-flex justify-content-between align-items-start px-0">
                    <div className="ms-2 flex-fill">
                  <div className="app-country"><ReactCountryFlag countryCode="JP" style={{
                    width: '2.5em',
                    height: '2.5em',
                  }} svg /> Japan</div>
                      <div className="app-progress">
                        <div className="progress">
                          <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="app-freedom-indicator unfree"><span className="sr-only visually-hidden">(un)free</span></div>
                  </li>
                  <li className="list-group-ite d-flex justify-content-between align-items-start px-0">
                    <div className="ms-2 flex-fill">
                  <div className="app-country"><ReactCountryFlag countryCode="DE" style={{
                    width: '2.5em',
                    height: '2.5em',
                  }} svg /> Germany</div>
                      <div className="app-progress">
                        <div className="progress">
                          <div className="progress-bar" style={{ width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="app-freedom-indicator unfree"><span className="sr-only visually-hidden">(un)free</span></div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        );
    }
}
