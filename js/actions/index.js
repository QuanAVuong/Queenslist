export const FETCH_POSTS = 'FETCH_POSTS';
import axios from 'axios';
import {get} from 'jquery';

export function fetchposts(category) {
  // api call
  console.log(category)
  let url = ('/api/findCategory/' + category)
  const request = axios.get(url)
  console.log('request',request)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
