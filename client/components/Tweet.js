// @flow
import React from 'react';

const Tweet = function TweetKappa(props: Object) {
  return (
    <div className="well" style={{ backgroundColor: 'white', textAlign: 'left' }}>
      <div className="tweet-image" style={{ float: 'left', margin: '1rem' }}>
        <img
          alt="ok"
          style={{ width: 50, height: 50 }}
          src={props.src}
        />
      </div>
      <div className="tweet-data" style={{ margin: '1rem' }}>
        <span style={{ fontSize: '14pt', marginRight: '1rem' }}> { props.name } </span>
        <span style={{ fontSize: '12pt' }}> { props.handle } </span>
        <p style={{ fontSize: '10pt' }}> { `${props.id} | ${props.text}` } </p>
      </div>
    </div>
  );
};

export default Tweet;
