import { combineReducers } from 'redux';
import {
  SET_SEARCH_TERM,
  DO_SEARCH,
  GET_JS_VIDEOS,
  GET_REACT_VIDEOS,
  HANDLE_MODAL
} from '../actions/types';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const searchResults = (state = {}, action) => {
  if (action.type === DO_SEARCH) {
    return action.payload;
  }
  return state;
};

const reactVideos = (state = {}, action) => {
  if (action.type === GET_REACT_VIDEOS) {
    return action.payload;
  }
  return state;
};

const jsVideos = (state = {}, action) => {
  if (action.type === GET_JS_VIDEOS) {
    return action.payload;
  }
  return state;
};

const modalInitialState = {
  visible: false,
  video: ''
};

const modal = (state = modalInitialState, action) => {
  if (action.type === HANDLE_MODAL) {
    return {
      visible: action.payload.visible,
      video: action.payload.video
    };
  }
  return state;
};

const rootReducer = combineReducers({
  searchTerm,
  searchResults,
  reactVideos,
  jsVideos,
  modal
});

export default rootReducer;
