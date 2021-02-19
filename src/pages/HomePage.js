import React from 'react';

// CSS import statements
import '../css/App.css';
import '../css/HomePage.css';

// Component import statements
import Experience from '../components/Experience.js';

// Content import Statements
import HomePageContent from '../content/HomePageContent.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomePageContent;
  }

  render() {
    return(
      <div>
        <div className='intro'>
          <div className='page-header'>Hey there, I'm Dan!</div>
          <p>I’m a Flight Test Engineer at Lockheed Martin and a Georgia Tech alumnus.</p>
          <p>“Continuous improvement is better than delayed perfection.”</p>
        </div>
        <hr />
        <div className='exp-header'>Here's what I've done</div>
        <Experience exp={this.state.experience} />
      </div>
    )
  }
}

export default Home;