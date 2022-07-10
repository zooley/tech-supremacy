import ReactCountryFlag from 'react-country-flag';
import React, { useState } from 'react';
import unsave from '../img/star.svg'
import save from '../img/star-click.svg'

function Countrydata({bidList, dataArr, addBid, removeBid}) {
  
  
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
              <td><SaveIcon bidList={bidList} data={data} addBid={addBid} removeBid={removeBid} /></td>
            </tr>
        )
      }
    </tbody>
  )
}

function SaveIcon({bidList, data, addBid, removeBid }) {
  const [toggle, setToggle] = useState(!bidList.includes(data));
  const changeIcon = () => {
    if (toggle) {
      setToggle(false);
      addBid(data);
    } else if (data.status === 'open'){
      setToggle(true);
      removeBid(data);
    }
  }

  return (
    <button style={{color: 'transparent', backgroundColor: 'transparent', borderColor: 'transparent'}} onClick={changeIcon}>
      {toggle ? <img src={unsave} alt="unsave" /> : <img src={save} alt="save" />}
    </button>
  )
}
  
export default Countrydata