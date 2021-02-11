import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';

class App extends Component {
  render() { 
    return ( //component={HomePage} exact />
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-content">
            <Route path="/chordsscales" component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </div>
        </div>
        <Footer />
      </Router>
      
    );
  }
}

export default App;
