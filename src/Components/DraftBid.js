import React, {Component} from 'react'
import ReactCountryFlag from 'react-country-flag';
import profile from '../img/profile.png'

function DraftBid({countryList, closeDraft}) {

  return (
    <div className="panel card rounded shadow-sm">
      <div className='draft'>
        <div className="draft-head">
          <h2 className="app-head">Draft a Bid</h2>
          <button onClick={closeDraft}>CLOSE →</button>
        </div>
        <div className='draft-nav'>
          <button> &lt; </button>
          Drafting # of 10 Bids
          <button> &gt; </button>
        </div>
        <div className='draft-body'>
          <span className="draft-title"> <ReactCountryFlag className="emoji" countryCode="US" svg />&ensp;United States</span>
          <div className='draft-info'>
            <div className='info-1'>
              <img src={profile} alt="profile picture" />
              <span>Acceptance Rate: ##.##%</span>
            </div>
            <div className='info-2'>
              <div>
                <span className='sub-header'>GDP&emsp;</span>
                <span>000,000,000,000 USD</span>
              </div>
              <div>
                <span className='sub-header'>Purchase Amount&emsp;</span>
                <span>000,000,000 USD</span>
              </div>
              <div>
                <span className='sub-header'>Population&emsp;</span>
                <span>000,000,000 people</span>
              </div>
              <div>
                <span className='sub-header'>Product Market Size&emsp;</span>
                <span>000,000,000 people</span>
              </div>
              <div>
                <span className='sub-header'>Political Freedom Score&emsp;</span>
                <span># of 10</span>
              </div>
              <span className='status'>
                Status message here
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DraftBid
