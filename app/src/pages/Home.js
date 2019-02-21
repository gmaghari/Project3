import React from 'react';
import ControlledCarousel from '../components/slideshow/slideshow';
import LibraryCard from '../components/Card/card.js';
import { Col, Row, Container } from "../components/Grid"
import "./css/Home.css";

 
const Home = () => (
    <div className="col-lg-12"> 
        <ControlledCarousel />
        <LibraryCard />

    </div>
    
);

export default Home;