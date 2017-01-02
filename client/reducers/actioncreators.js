// @flow
// import twitterApiGet from '../api/twitterApiGet'; // breaking webpack
const Twitter = require('twitter');
// const net = require('net');
// import Twitter from 'twitter';
import delay from 'delay';

export const NOTIFY_OF_API_REQUEST = 'NOTIFY_OF_API_REQUEST';
export const FETCH_FROM_API_AFTER_REQUEST = 'FETCH_FROM_API_AFTER_REQUEST';
export const GRAB_RESOLVED_API_RESP_PAYLOAD = 'GRAB_RESOLVED_API_RESP_PAYLOAD';
export const LOL = 'LOL';

const notifyOfApiRequest = function notifyOfApiRequestKappa(): Object {
  return ({
    type: NOTIFY_OF_API_REQUEST,
    requestInFlight: true,
  });
};

const grabResolvedApiRespPayload = function grabResolvedApiRespPayloadKappa(
  payload: Array<Object>,
): Object {
  return ({
    type: GRAB_RESOLVED_API_RESP_PAYLOAD,
    requestInFlight: false,
    payload,
  });
};

const dummyData = [
  { name: 'blah', handle: '@ok', text: 'dfdf is text', id: 77, src: 'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg' },
  { name: 'Oook', handle: '@17', text: 'this is text', id: 23, src: 'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg' },
  { name: 'yews', handle: '@QQ', text: 'that is text', id: 34, src: 'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg' },
  { name: 'dorg', handle: '@_Y', text: 'test is text', id: 88, src: 'http://pbs.twimg.com/profile_images/673373529908207616/E6EWF84p_normal.jpg' },
];

export const fetchFromApiAfterRequest = function fetchFromApiAfterRequestKappa(): Function {
  return (dispatch: Function) => {
    dispatch(notifyOfApiRequest()); // not sure if this should be function or function invokation
    return Promise.resolve(dummyData).then(delay(1000))
      .then((respArr) => {
        console.log('1s passed');
        // console.log('not in state', respArr);
        dispatch(grabResolvedApiRespPayload(respArr));
      })
      .catch(error => console.log(error));
  };
};

export const lol = function lolKappa(): Object {
  return ({
    type: LOL,
    thing: 'maybe',
  });
};
