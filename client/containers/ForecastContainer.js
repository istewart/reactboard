// @flow
import React from 'react';
import Forecast from '../components/Forecast';

const ForecastContainer = function ForecastContainerKappa(props: Object) {
  return (
    <div>
      <Forecast apiRespData={props.apiRespData} />
    </div>
  );
};

export default ForecastContainer;
