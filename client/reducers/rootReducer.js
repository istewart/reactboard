const defaultState: Array<Object> = [];

const rootReducer = function rootReducerKappa(state: Array<Object> = defaultState, action) {
  console.log('REDUCER FIRING');
  switch (action.type) {
    case 'LOL':
      console.log('yup lololol switched');
      return state;
    case 'MAKE_API_REQUEST':
      console.log('YUP REQUESTING TWEETS');
      return state;
    case 'GRAB_API_RESP_PAYLOAD':
      console.log('GRABING PAYLOAD');
      return state;
    case 'CITY_SELECT':
      console.log([...state, { ...action }]);
      return [...state, { ...action }];
    default:
      return state;
  }
};

export default rootReducer;
