import { ActionHelper } from '../helper';

const actionTypePrefix = 'Users/';
export const UserActionTypes = {
  POSTS: ActionHelper.createActionTypes(actionTypePrefix, 'POSTS'),
  USERS: ActionHelper.createActionTypes(actionTypePrefix, 'USERS'),
  POST_DETAILS: ActionHelper.createActionTypes(
    actionTypePrefix,
    'POST_DETAILS'
  ),
};
