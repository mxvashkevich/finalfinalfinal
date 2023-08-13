import { createAction } from 'redux-actions';

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST';
export const GET_ALL_POSTS_SUCCESS = 'GET_ALL_POSTS_SUCCESS';
export const GET_ALL_POSTS_FAILURE = 'GET_ALL_POSTS_FAILURE';

export const requestGetAllPosts = createAction(GET_ALL_POSTS_REQUEST);
export const successGetAllPosts = createAction(GET_ALL_POSTS_SUCCESS);
export const failureGetAllPosts = createAction(GET_ALL_POSTS_FAILURE);
