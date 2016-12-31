// @flow
import React from 'react';

const Tweet = function TweetKappa(props) {
  return (
    <div className="well" style={{ backgroundColor: 'white', maxWidth: '500px', textAlign: 'left' }}>
      <div className="tweet-image" style={{ float: 'left', margin: '1rem' }}>
	      <img
	          style={{width: 50, height: 50}}
	          src={'https://facebook.github.io/react/img/logo_og.png'}
          />
      </div>
      <div className="tweet-data" style={{ margin: '1rem' }}>
	      <span style={{ fontSize: '14pt', marginRight: '1rem'}}>{props.name}</span>
	      <span style={{ fontSize: '12pt' }}>{props.handle}</span>
	      <p style={{ fontSize: '10pt' }}>{props.text}</p>
      </div>
    </div>
  );
};
// <p>{JSON.stringify(props.apiRespData, null, '')}</p>

export default Tweet;
