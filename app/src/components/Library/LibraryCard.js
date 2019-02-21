import React, { Component } from 'react';
import films from "./films.json";
import { Container, Row } from 'react-bootstrap';
import './style.css';


class LibraryCard extends Component {

  handleUpdateFilm = id => ev => {
      // variable here
    id="";      
  }

  render() {
      return (
          <div>
              <div className="container">
                
                  <div className="row">
                      {films.map(({ id, name, image }) => // Props deconstruction
                        <div onClick={this.handleUpdateFilm(id)}>
                            <a onClick={() => { window.location.href = "filmdetails/" + name; }}>
                                <img src={image} alt={name} key={id}></img>
                            </a>
                            <h6>{name}</h6>
                        </div>
                      )}
                  </div>
              </div>
          </div>
      );
  }
}

export default LibraryCard;