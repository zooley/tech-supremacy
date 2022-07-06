import ReactCountryFlag from 'react-country-flag';
import React, { useState } from 'react';
import unsave from '../img/star.svg'
import save from '../img/star-click.svg'

function Countrydata({dataArr, addBid, removeBid}) {
  
  
  return (
    <tbody>
      {
        dataArr.map(
          data =>
            <tr>
              <td><ReactCountryFlag countryCode={data.countryCode} svg /> {data.name}</td>
              <td>{data.amount}</td>
              <td>{data.market}</td>
              <td>{data.freedom}</td>
              <td><span className={`badge badge-pill ${data.status}`}>{data.status}</span></td>
              <td><SaveIcon data={data} addBid={addBid} removeBid={removeBid} /></td>
            </tr>
        )
      }
    </tbody>
  )
}

function SaveIcon({ data, addBid, removeBid }) {
  const [toggle, setToggle] = useState(true);
  const changeIcon = () => {
    if (toggle) {
      setToggle(false);
      addBid(data);
    } else if (data.status === 'counter' || data.status === 'open'){
      setToggle(true);
      removeBid(data);
    }
  }

  return (
    <div onClick={changeIcon}>
      {toggle ? <img src={unsave} alt="unsave" /> : <img src={save} alt="save" />}
    </div>
  )
}
  
export default Countrydata