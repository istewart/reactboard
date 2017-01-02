// @flow
import React from 'react';

const Tweet = function TweetKappa(props: Object) {
  return (
    <div className="well" style={{ 
  	  backgroundColor: 'white',
  	  textAlign: 'left',
  	  padding: '9px 12px 9px 12px',
  	  marginBottom: '10px',
    }}>
      <div className="tweet-image" style={{ float: 'left', marginRight: '1rem' }}>
        <img
          alt="ok"
          style={{ width: '48px', height: '48px', borderRadius: '5px' }}
          src={props.src}
        />
      </div>
      <div className="tweet-data">
        <span style={{ fontSize: '15px'}}><b> { props.name } </b></span>
        <span style={{ fontSize: '13px', color: '#8899a6' }}> { props.handle } </span>
        <p style={{ fontSize: '22px', lineHeight: '28px' }}> { `${props.id} | ${props.text}` } </p>
      </div>
    </div>
  );
};

export default Tweet;
