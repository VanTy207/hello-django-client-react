import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {localStorageMiddleware } from './middleware';
import reducer from './reducers/reducers';
import rootSaga from './saga_actions/index';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(localStorageMiddleware, createSagaMiddleware(rootSaga));
  } else {
    return applyMiddleware(localStorageMiddleware, createSagaMiddleware(rootSaga),createLogger())
  }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));