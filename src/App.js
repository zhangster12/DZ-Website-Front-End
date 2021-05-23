import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS import statements
import './css/App.css';

// Component import statements
import About from './pages/AboutPage.js';
import Blog from './pages/BlogPage.js';
import BlogDetail from './components/BlogDetail';
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
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              {/* Adds blog and blog pages (BlogDetail). */}
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/blog/:id' component={BlogDetail} />
              <Route exact path='/contact' component={Contact} />
              {/* Adds page not found. */}
              <Route component={Home} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;