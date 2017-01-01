import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
// import react-redux from 'react-redux';

// const store = createStore(rootReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
