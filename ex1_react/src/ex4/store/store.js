import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import imagensReducer from '../reducers/reducers';

const store = createStore(imagensReducer, applyMiddleware(thunk));

export default store;