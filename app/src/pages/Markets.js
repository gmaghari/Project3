import React from 'react';
import { Col, Row, Container } from "../components/Grid"
import "./css/Markets.css";

const Markets = () => (

    <Container>
        <div id="main-about-container">
            <Col size="lg-12">
                <Row> 
                    <Col size="lg-4 md-4 sm-4">
                            <div className="market-logos">
                                <img src="/assets/images/market_logos/AFM_Logo.png" className="logo-image"></img>
                            </div>
                            <div className="market-text">
                                <h5>American Film Market</h5>
                                <p>Los Angeles</p>
                                <p>November</p>
                            </div>
                    </Col>
                    <Col size="lg-4 md-4 sm-4">
                        <div className="market-logos">
                            <img src="/assets/images/market_logos/Festival_de_Cannes_logo.png" className="logo-image"></img>
                        </div>
                        <div className="market-text">
                            <h5>Festival de Cannes</h5>
                            <p>Cannes</p>
                            <p>May</p>
                        </div>
                    </Col>
                    <Col size="lg-4 md-4 sm-4">
                        <div className="market-logos">
                            <img src="/assets/images/market_logos/SXSW.png" className="logo-image"></img>
                        </div>
                        <div className="market-text">
                            <h5>South by Southwest</h5>
                            <p>Austin</p>
                            <p>March</p>
                        </div>
                    </Col>
                </Row>
                <Row className="market-row"> 
                    <Col size="lg-4 md-4 sm-4">
                        <div className="market-logos">
                            <img src="/assets/images/market_logos/Tiff.png" className="logo-image"></img>
                        </div>
                        <div className="market-text">
                            <h5>Toronto Film Festival</h5>
                            <p>Toronto</p>
                            <p>September</p>
                        </div>
                    </Col>
                    <Col size="lg-4 md-4 sm-4">
                        <div className="market-logos">
                            <img src="/assets/images/market_logos/efm.png" className="logo-image"></img>
                        </div>
                        <div className="market-text">
                            <h5>European Film Market</h5>
                            <p>Berlin</p>
                            <p>February</p>
                        </div>
                    </Col>
                    <Col size="lg-4 md-4 sm-4">
                        <div className="market-logos">
                            <img src="/assets/images/logo/logo-transp.png" className="logo-image"></img>
                        </div>
                        <div className="market-text">
                            <a href="mailto:placeholderemailaddress.com"><h5>Contact us to arrange a meeting</h5></a>  
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    </Container>
);


export default Markets;
