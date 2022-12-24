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
                    <p>I'm a Georgia Tech graduate student and also an alumnus. Go Jackets!</p>
                    <p>"If you can''t fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward." -Martin Luther King, Jr.</p>
                </div>
                <hr />
                <div className='exp-header'>Check out my YouTube channel!</div>
                <div className='home-video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cc-Oci0u-eI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <hr />
                <div className='exp-header'>Here's what I've been up to</div>
                <Experience exp={this.state.experience} />
            </div>
        )
    }
}

export default Home;