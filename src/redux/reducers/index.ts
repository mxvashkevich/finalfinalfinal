import { combineReducers } from 'redux';

import postReducer from './getPostReducer.ts';

const rootReducer = combineReducers({
  news: postReducer,
});

export default rootReducer;
