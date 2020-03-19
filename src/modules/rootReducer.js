import { combineReducers } from 'redux';
import { UserReducer } from './users/reducer';

const RootReducer = combineReducers({
  user: UserReducer
});

export default RootReducer;
