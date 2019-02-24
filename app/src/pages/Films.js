import React, { Component} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LibraryCard from '../components/Library/LibraryCard';
import "./css/Library.css";
import filmList from "../components/Library/films.json"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import FilmsPage from './FilmsPage';
import "./css/Films.css";


class Films extends Component {


render(){ 
    return(
        <div className="library-container">    
        <Col size="lg-12">
            <Row>
                {filmList.map(filmList => (
                    <div id="poster-outer" className="col-lg-3 col-md-3 col-sm-3">
                        <div id="poster-inner">
                        <Link to={{ pathname: "/filmspage/", data: {
                                    id: filmList.id, 
                                    image: filmList.image, 
                                    name: filmList.name,
                                    desc: filmList.desc,
                                    year: filmList.year,
                                    status: filmList.status,
                                    cast: filmList.cast,
                                    director: filmList.director,
                                    duration: filmList.duration,
                                    format: filmList.format}}} >
                                    <LibraryCard link={filmList.image} name={filmList.name} id={filmList.id}/>
                                </Link>
                        </div>
                    </div>
                ))}
            </Row>
        </Col> 
                {/* <div id="poster-outer" className="col-lg-3 col-md-3 col-sm-3">
                  <div id="poster-inner">
                        <Link to={{ pathname: "/filmspage/", data: {id: filmList.id, image: filmList.image, name: filmList.name}}} >
                            <LibraryCard link={filmList.image} name={filmList.name} id={filmList.id}/>
                        </Link>
                    <h5>{filmsList.name}</h5>
                  </div>
                </div> */}

            
        </div>
    )
    }
    
    

}

export default Films;