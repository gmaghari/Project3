// import React, { Component } from 'react';
// import { Row, Col, Form, Button, ButtonToolbar } from 'react-bootstrap';
// import "./style.css";

// export default class Submission extends Component {
//     constructor(props) {
        
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit} className="submissionForm">
//             <h1>Film Submission</h1>
//             <Row>
//                 <Col>
//                     <Form.Label>Contact Name</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type="email" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>Contact Number</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Production Company</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>IMDB Link</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Movie Title</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>Production Year</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Genre</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>Country of Origin</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Producer</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>Screenwriter(s)</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Director</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>Lead Cast</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Run Time</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>Format Shot On</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <Form.Label>Digibeta Master (Y or N)</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Label>HD Master (Y or N)</Form.Label>
//                     <Form.Control type="text" />
//                 </Col>
//                 <Col>
//                     <ButtonToolbar>
//                         <Button type="submit" className="submit-button">Submit</Button>
//                     </ButtonToolbar>
//                 </Col>
//             </Row>
//         </form>
//       );
//     }
//   }

