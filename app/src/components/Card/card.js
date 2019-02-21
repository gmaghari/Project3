import React, { Component } from 'react';
import films from "./films";
import { Container, Col, Row } from 'react-bootstrap';
import './style.css';


class LibraryCard extends Component {
  render() {
     const imageClick = () => {
          console.log('Click');
     }
    return (
        <div className="col-lg-12" id="poster-container-home">
          <Row>
            {films.map((filmDetail) => {
              return (
                <div className="poster-main" >
                  <img src={filmDetail.image} onClick={() => imageClick()} alt={filmDetail.name} className="images"></img>
                </div>
              )
            })}
          </Row>
        </div>
    );
  }
}


export default LibraryCard;
