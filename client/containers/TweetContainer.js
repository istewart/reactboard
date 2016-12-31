import React from 'react';
import Tweet from '../components/Tweet';

const TweetContainer = function TweetContainerKappa(props: Object) {
  return (

    <div className="text-center col-sm-6">
      <div className="well">
        <Tweet
          text = { "hello world" }
          name = { "Ian Stewart" }
          handle = { "@shapelikefriend" }
          image = { "http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg" }
        />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default TweetContainer;
