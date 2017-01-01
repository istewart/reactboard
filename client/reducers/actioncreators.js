// @flow
// import twitterApiGet from '../api/twitterApiGet'; // breaking webpack
// const Twitter = require('twitter');
// const net = require('net');
// import Twitter from 'twitter';

export const NOTIFY_OF_API_REQUEST = 'NOTIFY_OF_API_REQUEST';
export const FETCH_FROM_API_AFTER_REQUEST = 'FETCH_FROM_API_AFTER_REQUEST';
export const GRAB_RESOLVED_API_RESP_PAYLOAD = 'GRAB_RESOLVED_API_RESP_PAYLOAD';
export const LOL = 'LOL';

export const notifyOfApiRequest = function notifyOfApiRequestKappa() {
  return ({
    type: NOTIFY_OF_API_REQUEST,
    requestInFlight: true,
  });
};

export const grabResolvedApiRespPayload = function grabResolvedApiRespPayloadK(payload: Array<Object>) {
  return ({
    type: GRAB_RESOLVED_API_RESP_PAYLOAD,
    requestInFlight: false,
    payload,
  });
};

export const fetchFromApiAfterRequest = function fetchFromApiAfterRequestKappa() {
  return (dispatch: Function) => {
    dispatch(notifyOfApiRequest()); // not sure if this should be function or function invokation
    return Promise.resolve([{ id: 77, src: 'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg' }, { id: 3, src: 'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg' }])
      .then((respArr) => {
        console.log(respArr);
        dispatch(grabResolvedApiRespPayload(respArr));
      })
      .catch(error => console.log(error));
  };
};

export const lol = function lolKappa() {
  return ({
    type: LOL,
    thing: 'maybe',
  });
};
