import { UserActionTypes } from './actionTypes';

const getUsers = () => (dispatch, getState, { api }) => {
  dispatch({
    type: UserActionTypes.USERS.FETCH,
    payload: {},
    promise: api
      .get(`users`)
      .then(res => {
        dispatch({
          type: UserActionTypes.USERS.SUCCESS,
          payload: res,
        });

        return res.data;
      })
      .catch(error => {
        dispatch({
          type: UserActionTypes.USERS.FAILURE,
          error,
        });
      }),
  });
};

const getPosts = () => (dispatch, getState, { api }) => {
  dispatch({
    type: UserActionTypes.POSTS.FETCH,
    payload: {},
    promise: api
      .get(`posts`)
      .then(res => {
        dispatch({
          type: UserActionTypes.POSTS.SUCCESS,
          payload: res,
        });

        return res.data;
      })
      .catch(error => {
        dispatch({
          type: UserActionTypes.POSTS.FAILURE,
          error,
        });
      }),
  });
};

const setPostDetails = data => (dispatch, getState) => {
  dispatch({
    type: UserActionTypes.POST_DETAILS.FETCH,
    payload: data,
  });
};

export const UserActions = {
  getPosts,
  getUsers,
  setPostDetails,
};
