import { createStore, compose, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { default as reduxThunk } from 'redux-thunk';
import api from '../apiClient/api';
import RootReducer from './rootReducer';

const initialState = {};

const middleware = [
  reduxThunk.withExtraArgument({ api }),
  reduxPackMiddleware,
].filter(Boolean);

const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
    // to activate the tool
  )
);

export default store;
