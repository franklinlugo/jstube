import yts from 'youtube-api-v3-search';
import {
  SET_SEARCH_TERM,
  DO_SEARCH,
  GET_JS_VIDEOS,
  GET_REACT_VIDEOS,
  HANDLE_MODAL
} from './types';

const API_KEY = 'AIzaSyAuWGD-BRYT18q7CHiNY7lA1KCiGn79WOw';

export const doSearch = searchTerm => dispatch => {
  dispatch({ type: SET_SEARCH_TERM, payload: searchTerm });
  const options = {
    q: searchTerm,
    part: 'snippet',
    type: 'video',
    maxResults: 15
  };
  yts(API_KEY, options).then(results =>
    dispatch({
      type: DO_SEARCH,
      payload: results
    })
  );
};

export const getLastReactVideos = () => dispatch => {
  const options = {
    q: 'reactjs',
    part: 'snippet',
    type: 'video',
    order: 'date',
    maxResults: 15
  };
  yts(API_KEY, options).then(results =>
    dispatch({
      type: GET_REACT_VIDEOS,
      payload: results
    })
  );
};

export const getLastJsVideos = () => dispatch => {
  const options = {
    q: 'javascript',
    part: 'snippet',
    type: 'video',
    order: 'date',
    maxResults: 15
  };
  yts(API_KEY, options).then(results =>
    dispatch({
      type: GET_JS_VIDEOS,
      payload: results
    })
  );
};

export function handleModal(visible, video = '') {
  return {
    type: HANDLE_MODAL,
    payload: {
      visible,
      video
    }
  };
}
