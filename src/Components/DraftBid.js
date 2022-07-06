import React, {Component, useState} from 'react'
import ReactCountryFlag from 'react-country-flag';
import profile from '../img/profile.png'
import '../css/Form.css'
function DraftBid({ country, dataArr, countryList, closeDraft }) {
  const [score, setScore] = useState(0);
  const data = dataArr.find(ele => ele.name === country);

  function increment() {
    if (score < 10) {
      setScore(score + 1);
    }
  }

  function decrement() {
    if (score > 0) {
      setScore(score - 1);
    }
  }

  let progress = 50;
  return (
    <div className="panel card rounded shadow-sm">
      <div className='draft'>
        <div className="draft-head rounded">
          <h2 className="app-head">{data.status === 'counter' ? 'counter' : 'draft'} a Bid</h2>
          <button onClick={closeDraft}>CLOSE →</button>
        </div>
        <div className='draft-nav'>
          <button> ← </button>
          Drafting # of 10 Bids
          <button> → </button>
        </div>
        <div className='draft-body'>
          <span className="draft-title"> <ReactCountryFlag className="emoji" countryCode={data.countryCode} svg />&ensp;{data.name}</span>
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
                <span>{data.amount} USD</span>
              </div>
              <div>
                <span className='sub-header'>Population&emsp;</span>
                <span>000,000,000 people</span>
              </div>
              <div>
                <span className='sub-header'>Product Market Size&emsp;</span>
                <span>{data.market} people</span>
              </div>
              <div>
                <span className='sub-header'>Political Freedom Score&emsp;</span>
                <span>{data.freedom} of 10</span>
              </div>
              <span className='status'>
                Status message here
              </span>
            </div>
          </div>
        </div>
        <div className='draft-body-2'>
          <span className="draft-title">Create Bid Offer</span>
          <form>
            <div className='draft-form'>
              <div className='info-1'>
              <label className='sub-header' for='unit'>Number of Units</label>
              <div>
                <input type="number" id='unit' placeholder='0' min='0'></input>
                <span className='units'> units</span>
              </div>

              <div className='sub-header'>Total Production</div>
              <div className='app-progress'>
                <div className='progress' style={{height: '8px'}}>
                  <div className="progress-bar" style={{backgroundColor:'#191e28', width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className='units'> ###,###,### units remaining</span>
              </div>

              <label className='sub-header' for='price'>Base Price</label>
              <div>
                <input type="number" id='price' placeholder='0' min='0'></input>
                <span className='units'> USD/unit</span>
              </div>
            </div>
            <div className='info-2 vline'>
              <label className='sub-header' for='subsidy'>Subsidize?</label>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch"/>
                <span class="slider round"></span>
                <input type="number" id='subsidy' placeholder='0' min='0' style={{width: '60%'}}></input>
                <span className='units'> units</span>
              </div>

              <div className='sub-header'>Foreign Aid Capacity</div>
              <div className='app-progress'>
                <div className='progress' style={{height: '8px'}}>
                  <div className="progress-bar" style={{backgroundColor:'#191e28', width: progress + '%' }} role="progressbar" aria-valuenow={{ progress }} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className='units'> $$$,$$$,$$$ USD remaining</span>
              </div>

              <label className='sub-header' for='score'>Political Freedom Score</label>
              <div>
                <button className='minus-button' type='button' onClick={decrement} >-</button>
                <input type='number' id='score' min={0} max={10} style={{ width: '25%', textAlign: 'center' }} value={score} readOnly/>
                <button className='plus-button' type='button' onClick={increment}>+</button>
                <span> of 10</span>
              </div>
            </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '1rem'}}>
              <button className='submit-button'>SAVE DRAFT</button>
              <button className='submit-button'>PLACE BID</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DraftBid
