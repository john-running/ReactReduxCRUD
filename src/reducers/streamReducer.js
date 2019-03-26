import _ from 'lodash';

import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:


      return {...state, ..._.mapKeys(action.payload,'id')}  //mapKeys is a lodash function that takes an array and returns an object.  String of id tells lodash to use id as the key in the new object it returns
    case FETCH_STREAM:
    //below is ES2015 syntax, identical to:

    //const newState = { ...state };
    //newState[action.payload.id] = action.payload;
    //return newState;
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return {  ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return {  ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);  // omit takes key of element in object you want to omit
    default:
      return state;
  }
};
