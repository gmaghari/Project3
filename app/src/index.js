import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';
import Films from './pages/Films';
import About from './pages/About';
import Markets from './pages/Markets';
import News from './pages/News';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import FilmsPage from './pages/FilmsPage';
import * as serviceWorker from './serviceWorker';
import Navbar from '../src/components/Navbar/navbar';
import Footer from '../src/components/Footer/footer';


const routing = (
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={() => (<Redirect to='/home' />)} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/films" component={Films} />
            <Route path="/markets" component={Markets} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={Admin} />
            <Route path="/filmspage" component={FilmsPage} />
            <Footer />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
