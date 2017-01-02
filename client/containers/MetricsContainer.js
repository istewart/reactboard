// @flow
import React from 'react';
import Wordcloud from '../components/Wordcloud';

const MetricsContainer = function MetricsContainerKappa(props: Object) {
  return (
    <div className="col-sm-6">
      <div className="row well">
        <p>Enter a City and State</p>
      </div>
      <Wordcloud {...props} />
    </div>
  );
};

export default MetricsContainer;
