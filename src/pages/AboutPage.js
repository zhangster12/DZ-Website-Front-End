import React from 'react';

// CSS import statements
import '../css/PageLayout.css';
import '../css/App.css';

// Content import Statement
import AboutPageContent from '../content/AboutPageContent.js';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = AboutPageContent;
    }

    render() {
        return(
            <div className='layout'>
                <div className="page-header">{this.state.about[0].name}</div>
                <div>
                    {this.state.about.map((currAbout) =>
                        currAbout.desc.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                    )}
                </div>
            </div>
        )
    }
}

export default About;