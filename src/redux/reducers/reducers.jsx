import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import { reducer as reduxFormReducer } from "redux-form";

const reducers = combineReducers({
  form: reduxFormReducer,
  routerReducer: routerReducer
});

export default reducers;
