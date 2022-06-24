import React, { Component, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Pencil from './img/Edit.png'
  
function Bidding({countrylist, openDraft}) {
  function checkStatus(country) {
    return country.status === 'counter';
  }
  return (
    <div className="panel card rounded shadow-sm">
      <div className="card-head rounded bid-head-container">
        <h2 className="app-head bid-head">0 of 2 Bids</h2>
        <span className='bid-head'>Countered This Season</span>
      </div>
      <div className="bid-body">
        {countrylist.map(
          country =>
            <div className={`app-bid rounded ${country.status}`} onClick={checkStatus(country) ? openDraft : null}>
              {checkStatus(country) ? <img className="editing" src ={Pencil} alt="Edit" /> : ''}
              <span className="bid-title">
                {country.countryCode === '' ? '' : <ReactCountryFlag className="emoji" countryCode={country.countryCode} svg />}
                {country.name === '' ? '' : ' ' + country.name + ': '}
                {country.status}
              </span>
            </div>
            
        )}
      </div>
    </div>
  );
  
}

export default Bidding