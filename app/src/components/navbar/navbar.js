import React, { Component } from 'react';
import "./style.css";

const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="/assets/images/logo/logo-transp.png" alt="Wood-Entertainment-Logo" id="main-logo"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {/* <h1 id="wood-title">WOOD ENTERTAINMENT</h1> */}
                </li>
                <li className="left-side nav-item">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/films">Films</a>
                </li>  
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/markets">Markets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/news">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
  }

  export default Navbar;