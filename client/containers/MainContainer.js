// @flow
import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import TweetContainer from '../containers/TweetContainer';

const MainContainer = function MainContainerKappa() {
  return (
    <div className="center-block" style={{maxWidth: '1200px'}}>
      <div className="row col-sm-12">
        <Navbar />
      </div>
      <div className="row col-sm-12">
        <TweetContainer />
        <Main />
      </div>
    </div>
  );
};

export default MainContainer;
