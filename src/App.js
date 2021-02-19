import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS import statements
import './css/App.css';

// Component import statements
import About from './pages/AboutPage.js';
import Blog from './pages/BlogPage.js';
import Contact from './pages/ContactPage.js';
import Footer from './components/Footer.js';
import Home from './pages/HomePage.js';
import NavBar from './components/NavBar.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/about' render={() => <About />} />
              <Route exact path='/blog' render={() => <Blog />} />
              <Route exact path='/contact' render={() => <Contact />} />
              {/* Adds page not found. */}
              <Route render={() => <Home />} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
