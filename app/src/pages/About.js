import React from 'react';
import { Col, Row, Container } from "../components/Grid"
import "./css/About.css";

const About = () => (

    <Container>
        <div id="main-about-container">
            <Col size="lg-12">
                <Row> 
                    <Col size="lg-6">
                        <div id="about-col1">          
                            <p><strong>WOOD ENTERTAINMENT</strong> is a Los Angeles based American film production and distributing company founded by International Sales Executive, Tara Wood in 2004. Wood Entertainment has acquired and sold 100’s of films of all genres in the domestic and international marketplace, attending all major film markets including Cannes, AFM and Berlin for over a decade.</p>
                            <p>CEO, Tara Wood maintains a diverse network of talent and strong relationships among Hollywood’s key players allowing the creation of the 21 YEARS SERIES, defining itself as a leader in today’s independent film community.</p>
                            <p>We are currently concentrating on acquiring independent films from today's up and coming filmmakers for international sales representation as well as developing new projects for Wood Entertainment productions. We welcome you to join our family and grow with us!</p>
                        </div>
                    </Col>
                    <Col size="lg-6">
                    <img src="https://via.placeholder.com/460x400.pngC/O https://placeholder.com/#How_To_Set_Image_Size"></img>
                    </Col>
                </Row>
            </Col>
        </div>
    </Container>
);

export default About;


