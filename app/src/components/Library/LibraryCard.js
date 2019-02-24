import React, { Component } from 'react';
import './style.css';



function LibraryCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img src={props.link} alt={props.name} key={props.id} className="img-poster"/>
        </div>
        <div><h7 className="poster-title">{props.name}</h7></div>
      </div>
    )
  }


export default LibraryCard;