import React, { Component} from 'react';
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid"
import { List, ListDiv} from "../components/List/list-avails"
import { List1, ListDiv1 } from "../components/List/list-submit";
import api from "../utils/api";
import countries from "../components/countries/countries.json"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import DeleteBtn from "../components/DeleteBtn/delete.js"
import UpdateBtn from "../components/UpdateBtn/update.js"


class Admin extends Component {
state = {
        countries,
        show: false,
        show1: false,
        pageLoad: [],
        submissions: [],
        singleLoad: [],
        contactName: "",
        movieTitle: "",
        ARGavailability: 'available',
        AUSavailability: 'available',
        BENavailability: 'available',
        BRAavailability: 'available',
        BULavailability: 'available',
        CHAavailability: 'available',
        CHLavailability: 'available',
        CISavailability: 'available',
        COLavailability: 'available',
        CZEavailability: 'available',
        DRavailability: 'available',
        FINavailability: 'available',
        FRAavailability: 'available',
        GERavailability: 'available',
        GREavailability: 'available',
        HKavailability: 'available',
        HUNavailability: 'available',
        INDavailability: 'available',
        INDOavailability: 'available',
        ISRavailability: 'available',
        ITAavailability: 'available',
        JAPavailability: 'available',
        KORavailability: 'available',
        LAMavailability: 'available',
        MALavailability: 'available',
        MEavailability: 'available',
        MEXavailability: 'available',
        NORavailability: 'available',
        PHIavailability: 'available',
        POLavailability: 'available',
        PORavailability: 'available',
        PRUavailability: 'available',
        ROMavailability: 'available',
        SAFavailability: 'available',
        SINavailability: 'available',
        SPAavailability: 'available',
        SWEavailability: 'available',
        TAIavailability: 'available',
        THAavailability: 'available',
        TURavailability: 'available',
        UKavailability: 'available',
        USavailability: 'available',
        VENavailability: 'available',
        YUGavailability: 'available'
}

componentDidMount(){
    this.loadMoviesForSale();
    this.loadSubmissionMovies();
}

//ADMIN MOVIES

loadMoviesForSale = () => {
    api.getAdminFilm()
    .then(res =>
        this.setState({ pageLoad: res.data, movieTitle: ""})
        )
        .catch(err => console.log(err));
}

getFilmByID = (id) => {
    api.getAdminFilmById(id)
    .then(res => 
        this.setState({ singleLoad: res.data, movieTitle: "" }))
        .then(
            this.state.singleLoad.map(singleLoad => (
                
                    this.setState({ movieTitle: singleLoad.movieTitle})
                
            ))

        )
        .catch(err => console.log(err));
}



deleteFilmForSale = id => {
    api.deleteAdminFilm(id)
    .then(res => this.loadMoviesForSale())
    .catch(err => console.log(err));
}

updateFilmForSale = id => {
    api.updateAdminFilm(id)
    .then(res => this.loadMoviesForSale())
    .catch(err => console.log(err));
}

//SUBMISSION MOVIES

loadSubmissionMovies = () => {
    api.getSubmission()
    .then(res =>
        this.setState({submissions: res.data, contactName: ""}))
        .catch(err => console.log(err))
}

deleteFilm = id => {
    api.deleteFilm(id)
    .then(res => this.loadFilms())
    .catch(err => console.log(err));
  }


//MODAL OPEN CLOSE
handleClose = () => {
    this.setState({ show: false });
  }

handleShow = () => {
    this.setState({ show: true });
  }

handleClose1 = () => {
    this.setState({ show1: false });
  }

handleShow1 = () => {
    this.setState({ show1: true });
  }

  //INPUT CHANGE
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleInputChange1 = event => {
    const { name, value } = event.target;
    this.setState({singleLoad:{
        [name]: value
    } 
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.movieTitle){
        api.saveAdminFilm({
            movieTitle: this.state.movieTitle,
            ARGavailability: this.state.ARGavailability,
            AUSavailability: this.state.AUSavailability,
            BENavailability: this.state.BENavailability,
            BRAavailability: this.state.BRAavailability,
            BULavailability: this.state.BULavailability,
            CHAavailability: this.state.CHAavailability,
            CHLavailability: this.state.CHLavailability,
            CISavailability: this.state.CISavailability,
            COLavailability: this.state.COLavailability,
            CZEavailability: this.state.CZEavailability,
            DRavailability: this.state.DRavailability,
            FINavailability: this.state.FINavailability,
            FRAavailability: this.state.FRAavailability,
            GERavailability: this.state.GERavailability,
            GREavailability: this.state.GREavailability,
            HKavailability: this.state.HKavailability,
            HUNavailability: this.state.HUNavailability,
            INDavailability: this.state.INDavailability,
            INDOavailability: this.state.INDOavailability,
            ISRavailability: this.state.ISRavailability,
            ITAavailability: this.state.ITAavailability,
            JAPavailability: this.state.JAPavailability,
            KORavailability: this.state.KORavailability,
            LAMavailability: this.state.LAMavailability,
            MALavailability: this.state.MALavailability,
            MEavailability: this.state.MEavailability,
            MEXavailability: this.state.MEXavailability,
            NORavailability: this.state.NORavailability,
            PHIavailability: this.state.PHIavailability,
            POLavailability: this.state.POLavailability,
            PORavailability: this.state.PORavailability,
            PRUavailability: this.state.PRUavailability,
            ROMavailability: this.state.ROMavailability,
            SAFavailability: this.state.SAFavailability,
            SINavailability: this.state.SINavailability,
            SPAavailability: this.state.SPAavailability,
            SWEavailability: this.state.SWEavailability,
            TAIavailability: this.state.TAIavailability,
            THAavailability: this.state.THAavailability,
            TURavailability: this.state.TURavailability,
            UKavailability: this.state.UKavailability,
            USavailability: this.state.USavailability,
            VENavailability: this.state.VENavailability,
            YUGavailability: this.state.YUGavailability
        }).then(res => this.loadMoviesForSale())
        .catch(err => console.log(err));
        }
}




render(){
    return(
    <Container fluid>

<Button variant="primary" onClick={this.handleShow}>
    Add Movie to DB
</Button>
        <Row>
        <Col size="m-6">
                <h6>Display from DB</h6>
            {this.state.pageLoad.length ? (
            <List>
            <Row>   
                <Col size="m-2">
                    <h6>Available Countries</h6>
                </Col>
                
                {/* map a column for every movie in db */}
                {this.state.pageLoad.map(pageLoad =>(
                <Col size="m-2">
                    <p>{pageLoad.movieTitle}</p>
                </Col>
                ))}
            </Row>  

            <Row>   
                <Col size="m-2">
                    <h6>_</h6>
                    <ListDiv>
                        {this.state.countries.map(countries=> (
                            <p>{countries.name}</p>
                        ))}
                    </ListDiv>
                </Col>
                
                {/* map a column for every movie in db */}
                {this.state.pageLoad.map(pageLoad =>(
                <Col size="m-2">
                    <DeleteBtn 
                        onClick={() => this.deleteFilmForSale(pageLoad._id)}
                        // display={pageLoad.movieTitle} 
                    >
                    </DeleteBtn>
                    <UpdateBtn
                        onClick={(event) => {this.handleShow1(); this.getFilmByID(pageLoad._id)}}
                        // onClick={() => this.handleShow1()}
                    >
                    </UpdateBtn>

                    <ListDiv key={pageLoad._id}>
                        {this.state.countries.map(countries => (
                            <p>{pageLoad[countries.st]}</p>
                            ))}
                    </ListDiv>
                </Col>
                ))}
            </Row>  
        
            </List>
            ) : (
                <h3> No results</h3>
            )}
        </Col>
        <Col size="md-4">
        <div className="submission-main-card">
              <div id="sub-title">
                <h1>Film Submissions</h1>
              </div>
                {this.state.submissions.length ? (
              <List1>
                
                {this.state.submissions.map(submissions => (
                  <ListDiv1 key={submissions.id}>
                  <div id="theMovie">
                      <Row>
                          <h2>{submissions.title}</h2>
                      </Row>
                  </div>
                  <div id="theInfo">
                      <Row>
                          <h6>Genre: {submissions.genre}</h6>
                      </Row>
                      <Row>
                          <h6>Year: {submissions.year}</h6>
                      </Row>
                      <Row>
                          <h6>Company: {submissions.company}</h6>
                      </Row>
                      <Row>
                          <h6 id="imdb">IMDB: {submissions.imdb}</h6>
                      </Row>
                      
                      <Row>
                          <h6>Producer: {submissions.producer}</h6>
                      </Row>
                      <Row>
                          <h6>Writer: {submissions.writer}</h6>
                      </Row>
                      <Row>
                          <h6>Director: {submissions.director}</h6>
                      </Row>
                      <Row>
                          <h6 id="cast">Cast: {submissions.cast}</h6>
                      </Row>
                      <Row>
                          <h6>Country of Origin: {submissions.country}</h6>
                      </Row>
                      <Row>
                          <h6>Run Time: {submissions.email}</h6>
                      </Row>
                      <Row>
                          <h6>Format: {submissions.format}</h6>
                      </Row>
                      <Row>
                          <h6>Digibeta: {submissions.digibeta}</h6>
                      </Row>
                      <Row>
                          <h6 id="hd">HD Master: {submissions.contactName}</h6>
                      </Row>
                      <Row>
                          <h6>Contact Name: {submissions.contactName}</h6>
                      </Row>
                      <Row>
                          <h6>Email: {submissions.email}</h6>
                      </Row>
                      <Row>
                          <h6>Contact Number: {submissions.contactNumber}</h6>
                      </Row>
                  </div>
                      <Row>
                          <DeleteBtn onClick={() => this.deleteFilm(submissions._id)}/>
                      </Row>
                    </ListDiv1>
                ))}
              </List1>
            ) : (
              <h3> No Result</h3>
            )}  
            </div>

        </Col>
    </Row>


{/* MODAL For Add Movie to DB */}

<Modal show={this.state.show} onHide={this.handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Add Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>        
        <Col size="md-3">
        <form>
            <h6>Movie Title</h6>
            <Input
                value={this.state.movieTitle}
                onChange={this.handleInputChange}
                name="movieTitle"
                placeholder="Movie Title (Required)"
                />
                </form>
        </Col>

        <Col size="md-6">
        <form>
        <h6>Country (Availability/Company Licensed To)</h6>
        {this.state.countries.map(countries =>(
            <ListDiv key={countries.id}>
                {countries.name}
            <Input value={this.state[countries.st]} onChange={this.handleInputChange} name={countries.st} placeholder='Available' />

            </ListDiv>
        ))}       
        </form>
        </Col>

        <Col size="md-2">
        <form>   
            
                
        </form>
        </Col>
        
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <FormBtn
            disabled={!(this.state.movieTitle)}
            onClick={this.handleFormSubmit}
            
            >
            Submit Movie
        </FormBtn>     
    </Modal.Footer>
</Modal>
    

{/* MODAL FOR UPDATE MOVIE */}

<Modal show={this.state.show1} onHide={this.handleClose1}>
    
    <Modal.Header closeButton>
    <Modal.Title>Update Movie No On Click No Get</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>        
        <Col size="md-3">
        <form>
            <h6>Movie Title</h6>
            {/* input box takes in the singleLoad movieTitle to repopulate the movie name with the name currently stored in the db */}
            
            <Input
                value={this.state.singleLoad.movieTitle}
                onChange={this.handleInputChange1}
                name="movieTitle"
                placeholder="movieTitle"
                />
                </form>
        </Col>

        <Col size="md-6">
        <form>
        <h6>Country (Availability/Company Licensed To)</h6>
        
        {this.state.countries.map(countries =>(
            <ListDiv key={countries.id}>
                {countries.name}
            <Input value={this.state.singleLoad[countries.st]} onChange={this.handleInputChange1} name={countries.st} placeholder='Available' />

            </ListDiv>
        ))}       
        </form>
        </Col>

        <Col size="md-2">
        <form>   
            
                
        </form>
        </Col>
        
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <FormBtn
            
            onClick={this.handleFormSubmit}
            
            >
            Submit Movie
        </FormBtn>     
    </Modal.Footer>
</Modal>


    
    </Container>
    )
    }

}

export default Admin;