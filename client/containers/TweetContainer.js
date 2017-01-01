import React from 'react';
import Tweet from '../components/Tweet';

const TweetContainer = function TweetContainerKappa(props: Object) {
  console.log('SDFDSFDSF', props.state);
  console.log('SDFDSFDSF', props.state[0]);
  return (

    <div className="text-center col-sm-6">
      <div className="well">
        {
          props.state[0] &&
          props.state[0].map(tweetData => <Tweet key={tweetData.id} {...tweetData} />)
        }
        <Tweet />
      </div>
    </div>
  );
};

export default TweetContainer;

// <Tweet text={'hello world'} name={'Ian Stewart'} handle={'@shapelikefriend'} id={12} src={'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg'} />
