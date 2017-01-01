export const grabApiRespPayload = function grabApiRespPayloadKappa(payload) {
  return ({
    type: 'GRAB_API_RESP_PAYLOAD',
    requestInFlight: false,
    payload,
  });
};

export const makeApiRequest = function makeApiRequestKappa() {
  return ({
    type: 'MAKE_API_REQUEST',
    requestInFlight: true,
  });
};

export const citySelect = function citySelectKappa(id: number, name: string) {
  return ({
    type: 'CITY_SELECT',
    id,
    name,
  });
};

export const lol = function lolKappa() {
  return ({
    type: 'LOL',
    thing: 'maybe',
  });
};
