import { combineReducers } from 'redux';
import postsReduser from './postsReduser';
import usersReducer from './usersReducer';


export default combineReducers({
     posts: postsReduser,
     users : usersReducer
});