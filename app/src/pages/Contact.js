import React, { Component} from 'react';
import { Input, FormBtn } from "../components/Form";
import { List1, ListDiv1 } from "../components/List/list-submit";
import { Col, Row, Container } from "../components/Grid"
import DeleteButton from "../components/DeleteBtn/delete";
import "./css/Contact.css";
import API from "../utils/api";


class FilmSubmission extends Component {
    state = {
        submissions: [],
        contactName: "",
        email: "",
        contactNumber: "",
        company: "",
        imdb: "",
        title: "",
        year: "",
        genre: "",
        country: "",
        producer: "",
        writer: "",
        director: "",
        cast: "",
        runtime: "",
        format: "",
        digibeta: "",
        hdmaster: ""
    }

  componentDidMount() {
    // this.loadFilms();
  }

  // loadFilms = () => {
  //   API.getSubmission() 
  //     .then(res => 
  //       this.setState({ submissions: res.data, contactName: "" })
  //     )
  //     .catch(err => console.log(err));
  // }

  // deleteFilm = id => {
  //   API.deleteFilm(id)
  //   .then(res => this.loadFilms())
  //   .catch(err => console.log(err));
  // }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
      API.saveFilm({
        contactName: this.state.contactName,
        email: this.state.email,
        contactNumber: this.state.contactNumber,
        company: this.state.company,
        imdb: this.state.imdb,
        title: this.state.title,
        year: this.state.year,
        genre: this.state.genre,
        country: this.state.country,
        producer: this.state.producer,
        writer: this.state.writer,
        director: this.state.director,
        cast: this.state.cast,
        runtime: this.state.runtime,
        format: this.state.format,
        digibeta: this.state.digibeta,
        hdmaster: this.state.hdmaster
      }).then(res => this.loadFilms())
      .catch(err => console.log(err));
  }

  render() {
    return (

      <Container>
        <div id="main-contact-container">
          <Col size="lg-12">

            <Row> 

                <Col size="lg-6">
                  <div id="sales-inquiries">
                    <h3>For SALES inquiries,</h3>
                    <h5>please contact:</h5>
                    <p>Tara Wood</p>
                    <p>Email: tara@woodentertainment.net</p>
                  </div>
                </Col>
                <Col size="lg-6">
                  <div id="acquisitions">
                    <h3>For ACQUISITIONS Inquiries,</h3>
                    <h5>please contact:</h5>
                    <p>acquisitions@woodentertainment.net</p>
                  </div>
                </Col>
            </Row>
          </Col>
        
          <Col size="lg-12">
            <form>
              <Row>
                <Col size="lg-12">
                  <h1 id="filmSubTitle">Film Submission</h1>
                </Col>
              </Row>
              <Row>
                <Col size="lg-12">
                  <p id="to-submit">To submit a film for consideration for US or International representation, please fill out the form below.<br></br>
                  Do not include a link for the full screener of the film.
                  We will contact you based on the information provided and a trailer, if applicable.
                  Thank you,<br></br>
                  Wood Entertainment</p>
                </Col>
              </Row>

              {/* Row 1 */}
              <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.contactName}
                    onChange={this.handleInputChange}
                    name="contactName"
                    placeholder="Contact Name*"
                  />
                </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email*"
                  />
                </Col>
              </Row>

              {/* Row 2 */}
              <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.contactNumber}
                    onChange={this.handleInputChange}
                    name="contactNumber"
                    placeholder="Number"
                  />
                </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.company}
                    onChange={this.handleInputChange}
                    name="company"
                    placeholder="Company"
                  />
                </Col>
              </Row>

              {/* Row 3 */}
              <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.imdb}
                    onChange={this.handleInputChange}
                    name="imdb"
                    placeholder="IMDB link"
                  />
                </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Film Title*"
                  />
                </Col>
              </Row>

              {/* Row 4 */}
              <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.producer}
                    onChange={this.handleInputChange}
                    name="producer"
                    placeholder="Producer*"
                  />
                </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.writer}
                    onChange={this.handleInputChange}
                    name="writer"
                    placeholder="Writer"
                  />
                </Col>
              </Row>

              {/* Row 5 */}
              <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.director}
                    onChange={this.handleInputChange}
                    name="director"
                    placeholder="Director*"
                  />
                </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.cast}
                    onChange={this.handleInputChange}
                    name="cast"
                    placeholder="Cast"
                  />
                </Col>
                </Row>

                {/* Row 6 */}
                <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.year}
                    onChange={this.handleInputChange}
                    name="year"
                    placeholder="Production Year*"
                  />
                </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.genre}
                    onChange={this.handleInputChange}
                    name="genre"
                    placeholder="Genre*"
                  />
                </Col>
              </Row>

              {/* Row 7 */}
              <Row>
                <Col size="lg-6">
                  <Input
                    value={this.state.country}
                    onChange={this.handleInputChange}
                    name="country"
                    placeholder="Country*"
                  />
                  </Col>
                <Col size="lg-6">
                  <Input
                    value={this.state.runtime}
                    onChange={this.handleInputChange}
                    name="runtime"
                    placeholder="Runtime"
                  />
                </Col>
              </Row>
                {/* Row 8 */}
              <Row>
                <Col size="lg-3">
                  <Input
                    value={this.state.format}
                    onChange={this.handleInputChange}
                    name="format"
                    placeholder="Format"
                  />
                </Col>
                <Col size="lg-3">
                  <Input
                    value={this.state.digibeta}
                    onChange={this.handleInputChange}
                    name="digibeta"
                    placeholder="Digibeta"
                  />
                </Col>
                <Col size="lg-3">
                  <Input
                    value={this.state.hdmaster}
                    onChange={this.handleInputChange}
                    name="hdmaster"
                    placeholder="HD Master"
                  />
                </Col>
                <Col size="lg-3">
                  <FormBtn onClick={this.handleFormSubmit} id="frmbtn">
                    Submit
                  </FormBtn>
                </Col>
              </Row>

            </form>
          </Col>
        </div>
      </Container>
    );
  }
}





export default FilmSubmission;