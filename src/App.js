import React from 'react'; 
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Footer from './components/Footer';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';

import Me from '../src/assets/images/Me.jpg';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    //state is for top level 
    this.state = {
      title: 'Aaron McGloin',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Personal Portfilio',
        subTitle: 'All projects developed using React',
        text: 'Check out my projects below'
      },
      about: {
        title: 'About Me',
        imgSrc: Me,
      },
      contact: {
        title: 'Let\'s Talk',
      },
    }
  }

  render(){
    return (
      <Router>
       <Container className="p-0" fluid={true}>
         
         <NavBar className="border-bottom" bg="transparent" expand="lg">
           <NavBar.Brand>Aaron McGloin</NavBar.Brand>

           <NavBar.Toggle className="border-0"aria-controls="navbar-toggle" />
           <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
           </NavBar.Collapse>
         </NavBar>


          {/* 
          whenever you are at this path render this component
          the exact means that the whole path will have to be true as all have '/'
          */}
         <Route path="/" exact render={() => <HomePage title={this.state.home.title } subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> 
         <Route path="/about" render={() => <AboutPage title={this.state.about.title} imgSrc={this.state.about.imgSrc}/>}/> 
         <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />}/>  

         <Footer />

       </Container>
      </Router>
    );
  }
}

export default App;
