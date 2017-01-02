import React from 'react';
import Tweet from '../components/Tweet';

const TweetContainer = function TweetContainerKappa(props: Object) {
  return (

    <div className="text-center col-sm-6">
      <div className="well">
        {
          props.state[0] &&
          props.state[0].map(tweetData => <Tweet key={tweetData.id} {...tweetData} />)
        }
      </div>
    </div>
  );
};

export default TweetContainer;
