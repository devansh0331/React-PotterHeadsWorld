import React from 'react'

import "./Card.css"

import Hogworts from "../../img/Hogworts.jpg"

function Card( props) {
  return (
    
    <div className="card">
        <img className={!props.image ? "imgNull" : ""} src={props.image} alt=""/>
        <div className="title">
            <h1>{props.name}</h1>
        </div>
    <div className="table">
        

    
    </div>
  </div>
  )
}

export default Card
