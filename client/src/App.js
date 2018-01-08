import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from './components/About';
import Player from './components/Player';
import Landing from './components/Landing';



class App extends Component {
  

  render() {
    return (
    <Router>
      <div className="App">
        <Navbar inverse collapseOnSelect className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Playlist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem eventKey={1} href="#"><Link to="/">Home</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to="/about">About</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"><Link to="/play">Player</Link></NavItem>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>  

          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/play" component={Player} />
            <Route path="/about" component={About} />
          </main>
     
        
        {/* <Footer /> */}
      </div>
      </Router>
    );
  }
}

export default App;
