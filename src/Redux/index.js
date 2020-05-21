import rootReducer from './Reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//STORE
export default createStore(rootReducer, applyMiddleware(thunk));
