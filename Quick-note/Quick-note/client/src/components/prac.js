import React, { useState } from 'react'
import './prac.css'
const Prac = (props) => {
    const [abc,setAbc]=useState("abc")
  return (
    <div className="card1">
        <label className="no1">Form 1</label>
        <div>
            <h1 className="no2">name</h1>
            <div>
                <img className= "no3" src={props.image} alt="no image"></img>
            </div>
        </div>
        <div>
            <label>abc : </label>
            <input id="fname" placeholder="Enter Your Name" value={abc} onChange={e=>setAbc(e.target.value)}/>
        </div>
        <label className="no4">4637856</label>
    </div>
  )
}

export default Prac
