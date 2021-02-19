import React from 'react';

// CSS import statement
import '../css/Experience.css';

function Experience(props) {
  console.log(props.name);

  const expList = props.exp.map(entry =>
    <div className='exp-container' key={entry.id}>
      <img src={entry.logo} alt={entry.alt} />
      <div className='description'>
        <div className='header'>
          <a href={entry.link} rel='noopener noreferrer' target='_blank'>
            {entry.name}
          </a>
        </div>
        <div className='sub-header'>{entry.time}</div>
        <div className='sub-header'>{entry.title}</div>
        <div className='sub-header'>{entry.location}</div>
        <div>{entry.desc.map(paragraph => <p>{paragraph}</p>)}</div>
      </div>
    </div>
  )

  return (
    <div>{expList}</div>
  );
}

export default Experience;