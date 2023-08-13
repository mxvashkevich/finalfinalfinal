import { put, call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { GET_ALL_POSTS_REQUEST, failureGetAllPosts, successGetAllPosts } from '../actions/actions.ts';

import { IPost, TGetPostWroker, TWatcher } from '../types/types.ts';
import getPosts from '../api/getPostApi.ts';

function* getPostsWorker(): TGetPostWroker {
  try {
    const response: AxiosResponse<IPost[]> = yield call(getPosts);
    const postsArray = response.data;

    yield put(successGetAllPosts(postsArray));
  } catch (error) {
    yield put(failureGetAllPosts(error));
  }
}

function* getPostsWatcher(): TWatcher {
  yield takeLatest(
    GET_ALL_POSTS_REQUEST,
    getPostsWorker,
  );
}

export default getPostsWatcher;
