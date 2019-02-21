import React, { Component } from 'react';
import Films from '../components/Library/films.json';
import LibraryCard from '../components/Library/LibraryCard';
// import { Container, Col, Row } from 'react-bootstrap';
// import { Link, Route } from 'react-router-dom';
// import LibraryCard from '../components/Library/LibraryCard';



class Details extends Component {
  render() {
    return (
      <div><h1 align="center">This is a story...</h1>
        {/* <div className="container">
            <div className="row">
              {Films.map(Film => <img src={Film.image} key={Film.id} id={Film.id} alt={Film.name} handleClick={this.handleClick} />)}
            </div>
        </div> */}
      </div>
    );
}
}
    



export default Details;