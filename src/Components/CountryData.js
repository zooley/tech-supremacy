import ReactCountryFlag from 'react-country-flag';
import React, { useState } from 'react';
import database from './Data'
import unsave from '../img/star.svg'
import save from '../img/star-click.svg'

function Countrydata({addBid, removeBid}) {
  const [dataArr, setData] = useState(database);
  
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
              <td><span className="badge badge-pill bg-success">{data.status}</span></td>
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
    } else {
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