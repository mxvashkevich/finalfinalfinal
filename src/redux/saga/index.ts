import { all, fork } from 'redux-saga/effects';

import getPostsWatcher from './postSaga.ts';

function* rootSaga() {
  yield all([
    fork(getPostsWatcher),
  ]);
}

export default rootSaga;
