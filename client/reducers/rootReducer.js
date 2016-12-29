const defaultState: Array<Object> = [];

const rootReducer = function rootReducerKappa(state: Array<Object> = defaultState, action) {
  console.log('REDUCER FIRING');
  switch (action.type) {
    case 'LOL':
      console.log('yup lololol switched');
      return state;
    case 'CITY_SELECT':
      console.log([...state, { ...action }]);
      return [...state, { ...action }];
    default:
      return state;
  }
};

export default rootReducer;
