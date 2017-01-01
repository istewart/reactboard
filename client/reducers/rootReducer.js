// @flow
import {
  NOTIFY_OF_API_REQUEST,
  FETCH_FROM_API_AFTER_REQUEST,
  GRAB_RESOLVED_API_RESP_PAYLOAD,
  LOL,
} from './actioncreators';

const defaultState: Array<Object> = [];

const rootReducer = function rootReducerKappa(
  state: Array<Object> = defaultState,
  action: Function|Object,
) {
  console.log('REDUCER FIRING');
  switch (action.type) {
    case LOL:
      console.log('yup lololol switched');
      return state;
    case NOTIFY_OF_API_REQUEST:
      console.log('yup requesting tweets');
      // should also change the inFlight stuff eventually
      return [...state];
    case FETCH_FROM_API_AFTER_REQUEST:
      console.log('fetching');
      return state;
    case GRAB_RESOLVED_API_RESP_PAYLOAD:
      console.log('grabing payload');
      console.log(['updated state', ...state, action.payload]);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rootReducer;
