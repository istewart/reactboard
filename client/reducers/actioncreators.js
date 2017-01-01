export const NOTIFY_OF_API_REQUEST = 'NOTIFY_OF_API_REQUEST';
export const FETCH_FROM_API_AFTER_REQUEST = 'FETCH_FROM_API_AFTER_REQUEST';
export const GRAB_RESOLVED_API_RESP_PAYLOAD = 'GRAB_RESOLVED_API_RESP_PAYLOAD';
export const LOL = 'LOL';

export const grabResolvedApiRespPayload = function grabResolvedApiRespPayloadKappa(payload) {
  return ({
    type: GRAB_RESOLVED_API_RESP_PAYLOAD,
    requestInFlight: false,
    payload,
  });
};

export const fetchFromApiAfterRequest = function fetchFromApiAfterRequest() {
  return ({
    type: FETCH_FROM_API_AFTER_REQUEST,
    requestInFlight: true,
  });
};

export const notifyOfApiRequest = function notifyOfApiRequestKappa() {
  return ({
    type: NOTIFY_OF_API_REQUEST,
    requestInFlight: true,
  });
};

export const lol = function lolKappa() {
  return ({
    type: LOL,
    thing: 'maybe',
  });
};
