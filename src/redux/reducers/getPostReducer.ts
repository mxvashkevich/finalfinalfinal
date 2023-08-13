/* eslint-disable default-param-last */
import { GET_ALL_POSTS_FAILURE, GET_ALL_POSTS_REQUEST, GET_ALL_POSTS_SUCCESS } from '../actions/actions.ts';
import { IAction, IStatePost } from '../types/types.ts';

const initialState: IStatePost = {
  isLoading: false,
  error: null,
  data: [],
};

const initialAction: IAction = {
  type: null,
  payload: null,
};

function postReducer(state: IStatePost = initialState, action: IAction = initialAction) {
  switch (action.type) {
    case GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default postReducer;
