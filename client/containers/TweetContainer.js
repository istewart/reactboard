import React from 'react';
import Tweet from '../components/Tweet';

const TweetContainer = function TweetContainerKappa(props: Object) {
  return (

    <div className="text-center col-sm-4">
      <div className="well">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default TweetContainer;
