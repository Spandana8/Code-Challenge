import { UserActionTypes } from './actionTypes';

// To fetch users info
const getUsers = () => (dispatch, getState, { api }) => {
  dispatch({
    type: UserActionTypes.USERS.FETCH,
    payload: {},
    promise: api
      .get(`users`)
      .then(res => {
        dispatch({
          type: UserActionTypes.USERS.SUCCESS,
          payload: res
        });

        return res.data;
      })
      .catch(error => {
        dispatch({
          type: UserActionTypes.USERS.FAILURE,
          error
        });
      })
  });
};

// To fetch posts info
const getPosts = () => (dispatch, getState, { api }) => {
  dispatch({
    type: UserActionTypes.POSTS.FETCH,
    payload: {},
    promise: api
      .get(`posts`)
      .then(res => {
        dispatch({
          type: UserActionTypes.POSTS.SUCCESS,
          payload: res
        });

        return res.data;
      })
      .catch(error => {
        dispatch({
          type: UserActionTypes.POSTS.FAILURE,
          error
        });
      })
  });
};

// To store post Details
const setPostDetails = data => dispatch => {
  dispatch({
    type: UserActionTypes.POST_DETAILS.FETCH,
    payload: data
  });
};

export const UserActions = {
  getPosts,
  getUsers,
  setPostDetails
};
