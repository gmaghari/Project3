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
import Table from 'react-bootstrap/Table'
import "./css/Admin.css";



class Admin extends Component {
state = {
        countries,
        show: false,
        show1: false,
        idSearch: "",
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
        this.setState({ 
        idSearch: "",
        pageLoad: res.data, 
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
        YUGavailability: 'available',
        })
        )
        .catch(err => console.log(err));
}

getFilmByID = (id) => {
    api.getAdminFilmById(id)
    .then(res => 
        this.setState({ singleLoad: res.data, movieTitle: "", idSearch: res.data.id }))
        .then(
        )
        .catch(err => console.log(err));
}



deleteFilmForSale = id => {
    api.deleteAdminFilm(id)
    .then(res => this.loadMoviesForSale())
    .catch(err => console.log(err));
}

updateFilmForSale = (id, data) => {
    api.updateAdminFilm(id, data)
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

handleFormSubmit1 = (event, id) => {
    event.preventDefault();
    // if (this.state.singleLoad.movieTitle){
        api.updateAdminFilm( {_id: this.state.idSearch}, {
            movieTitle: this.state.singleLoad.movieTitle,
            ARGavailability: this.state.singleLoad.ARGavailability,
            AUSavailability: this.state.singleLoad.AUSavailability,
            BENavailability: this.state.singleLoad.BENavailability,
            BRAavailability: this.state.singleLoad.BRAavailability,
            BULavailability: this.state.singleLoad.BULavailability,
            CHAavailability: this.state.singleLoad.CHAavailability,
            CHLavailability: this.state.singleLoad.CHLavailability,
            CISavailability: this.state.singleLoad.CISavailability,
            COLavailability: this.state.singleLoad.COLavailability,
            CZEavailability: this.state.singleLoad.CZEavailability,
            DRavailability: this.state.singleLoad.DRavailability,
            FINavailability: this.state.singleLoad.FINavailability,
            FRAavailability: this.state.singleLoad.FRAavailability,
            GERavailability: this.state.singleLoad.GERavailability,
            GREavailability: this.state.singleLoad.GREavailability,
            HKavailability: this.state.singleLoad.HKavailability,
            HUNavailability: this.state.singleLoad.HUNavailability,
            INDavailability: this.state.singleLoad.INDavailability,
            INDOavailability: this.state.singleLoad.INDOavailability,
            ISRavailability: this.state.singleLoad.ISRavailability,
            ITAavailability: this.state.singleLoad.ITAavailability,
            JAPavailability: this.state.singleLoad.JAPavailability,
            KORavailability: this.state.singleLoad.KORavailability,
            LAMavailability: this.state.singleLoad.LAMavailability,
            MALavailability: this.state.singleLoad.MALavailability,
            MEavailability: this.state.singleLoad.MEavailability,
            MEXavailability: this.state.singleLoad.MEXavailability,
            NORavailability: this.state.singleLoad.NORavailability,
            PHIavailability: this.state.singleLoad.PHIavailability,
            POLavailability: this.state.singleLoad.POLavailability,
            PORavailability: this.state.singleLoad.PORavailability,
            PRUavailability: this.state.singleLoad.PRUavailability,
            ROMavailability: this.state.singleLoad.ROMavailability,
            SAFavailability: this.state.singleLoad.SAFavailability,
            SINavailability: this.state.singleLoad.SINavailability,
            SPAavailability: this.state.singleLoad.SPAavailability,
            SWEavailability: this.state.singleLoad.SWEavailability,
            TAIavailability: this.state.singleLoad.TAIavailability,
            THAavailability: this.state.singleLoad.THAavailability,
            TURavailability: this.state.singleLoad.TURavailability,
            UKavailability: this.state.singleLoad.UKavailability,
            USavailability: this.state.singleLoad.USavailability,
            VENavailability: this.state.singleLoad.VENavailability,
            YUGavailability: this.state.singleLoad.YUGavailability
        }).then(res => this.loadMoviesForSale())
        .catch(err => console.log(err));
        }
// }


 
render(){
    return(
        <Col size="lg-12">
            <Row>
                <Col size="lg-6">

                <div className="avails-outer">
                <div className="avails-header">
                    <h1>Film Availability</h1>
                    <Button className="add-movie-button" variant="primary" onClick={this.handleShow}>Add Movie to DB</Button>
                </div>
                <table class="table table-striped table-dark table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Territories</th>
                            {this.state.pageLoad.map(pageLoad => (

                                <th scope="col">{pageLoad.movieTitle}</th>
                            ))}
                        </tr>
                        <tr>
                            <th scope="col"></th>
                            {this.state.pageLoad.map(pageLoad => (
                                <th scope="col"> 
                                <DeleteBtn 
                                    onClick={() => this.deleteFilmForSale(pageLoad._id)}    
                                    >
                                </DeleteBtn>
                                <UpdateBtn
                                    onClick={(event) => {this.handleShow1(); this.getFilmByID(pageLoad._id)}}
                                    >
                                </UpdateBtn>
                                </th>
                            ))}
                        </tr>

                    </thead>
                        <tbody>
                        {this.state.countries.map(countries => (
                            <tr>
                                <th scope="row">{countries.name}</th>
                        {this.state.pageLoad.map(pageLoad => (   
                                <td>{pageLoad[countries.st]}</td>
                            ))}
                            </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </Col>


            
        <Col size="lg-2"></Col>


        <Col size="lg-4">
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
            onClick={(event) => {this.handleFormSubmit(event); this.handleClose(); this.loadMoviesForSale()}}
            
            >
            Submit Movie
        </FormBtn>     
    </Modal.Footer>
</Modal>

   
 
{/* MODAL FOR UPDATE MOVIE */}

<Modal show={this.state.show1} onHide={this.handleClose1}>
    
    <Modal.Header closeButton>
    <Modal.Title>Update Movie</Modal.Title>
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
            key={this.state.singleLoad._id}
            
            onClick={(event) => {this.handleFormSubmit1(event, this.state.singleLoad._id); this.handleClose1(); this.loadMoviesForSale()}}
            >
            Submit Movie
        </FormBtn>     
    </Modal.Footer>
</Modal>

        </Row>
    </Col>
    )
    }

}

export default Admin;