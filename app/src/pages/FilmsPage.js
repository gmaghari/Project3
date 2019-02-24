import React, {Component} from 'react';
import filmList from "../components/Library/films.json";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid"
import { List, ListDiv} from "../components/List/list-avails"
import { List1, ListDiv1 } from "../components/List/list-submit";
import LibraryCard from '../components/Library/LibraryCard';
import Films from "./Films";
import "./css/FilmsPage.css"

class FilmsPage extends Component {

render(){

    const data = this.props.location.data;
    
    return (
        <Container fluid>
            <Row>
                <div className="col-lg-6">
                    {/* <p> Individual Film Page</p> */}
                    <img src={data.image}></img>
                    <p>{data.name}</p>
                </div>
                {/* <div className="col-sm-2"></div> */}
                <div className="col-lg-6">
                    <h6 className="filmDataSend">Synopsis</h6>
                    <p>{data.desc}</p>
                    <h6 className="filmDataSend">Year</h6>
                    <p>{data.year}</p>
                    <h6 className="filmDataSend">Status</h6>
                    <p>{data.status}</p>
                    <h6 className="filmDataSend">Cast</h6>
                    <p>{data.cast}</p>
                    <h6 className="filmDataSend">Director</h6>
                    <p>{data.director}</p>
                    <h6 className="filmDataSend">Duration</h6>
                    <p>{data.duration}</p>
                    <h6 className="filmDataSend">Format:{data.format}</h6>
                </div>
            </Row>
        </Container>
        )
    }
}
export default FilmsPage;
