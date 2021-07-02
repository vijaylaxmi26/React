import _ from 'lodash';
import { 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM ,
    DELETE_STREAM,
    EDIT_STREAM 
  } from '../actions/type';
import streams from '../api/streams';


//to convert array to object we use mapKeys(stream,"id")
export default (state = {}, action) => {
    switch(action){
        case CREATE_STREAM:
            return { ...state, [action.payload.id] : action.payload };
        case FETCH_STREAMS:
             return {...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_STREAM:
            return { ...state, [action.payload.id] : action.payload };
        case DELETE_STREAM:
             return _.omit(state, action.payload);
        case EDIT_STREAM:
            return { ...state, [action.payload.id] : action.payload };
        default:
            return state;
    }
}