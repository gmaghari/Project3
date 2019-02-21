import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/components/navbar/navbar';
import Footer from '../src/components/Footer/footer';


class App extends Component {
  render() {
    return ( 
      <div>
        <Navbar />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
