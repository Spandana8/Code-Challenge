import { UserActionTypes } from './actionTypes';

const initialState = {
  users: null,
  posts: null,
  postDetails: null,
  loading: {
    posts: false,
    users: false
  },
  error: {
    posts: null,
    users: null
  }
};

export const UserReducer = (state = initialState, action = '') => {
  const { type, payload, error } = action;
  switch (type) {
    // users
    case UserActionTypes.POSTS.FETCH:
      return {
        ...state,
        loading: { ...state.loading, posts: true },
        error: { ...state.error, posts: null }
      };
    case UserActionTypes.POSTS.SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: { ...state.loading, posts: false }
      };
    case UserActionTypes.POSTS.FAILURE:
      return {
        ...state,
        loading: { ...state.loading, posts: false },
        error: { ...state.error, posts: error }
      };
    // posts
    case UserActionTypes.USERS.FETCH:
      return {
        ...state,
        loading: { ...state.loading, users: true },
        error: { ...state.error, users: null }
      };
    case UserActionTypes.USERS.SUCCESS:
      return {
        ...state,
        users: payload,
        loading: { ...state.loading, users: false }
      };
    case UserActionTypes.USERS.FAILURE:
      return {
        ...state,
        loading: { ...state.loading, users: false },
        error: { ...state.error, users: error }
      };
    //posts details
    case UserActionTypes.POST_DETAILS.FETCH:
      return {
        ...state,
        postDetails: payload
      };
    default:
      return state;
  }
};
