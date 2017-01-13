export const FETCH_ANY = 'FETCH_ANY';
export const FETCH_ONLY = 'FETCH_ONLY';
export const CREATE_AD = 'CREATE_AD';
import axios from 'axios';
import {get} from 'jquery';

export function fetchAny(tags, categorys) {
  // api call

  let url = ('/api/findPostsWithAny/' + tags + '/' + categorys)
  const request = axios.get(url)
  return {
    type: FETCH_ANY,
    payload: request
  }
}

export function fetchOnly(tags, categorys) {
  // api call
  console.log(tags, categorys)
  let url = ('/api/findPostsWithOnly/' + tags + '/' + categorys)
  const request = axios.get(url)
  return {
    type: FETCH_ONLY,
    payload: request
  }
}


export function createAd(ad) {
  // api call
  let url = ('/api/createPost/')
  axios.post(url, {
    category: ad.category,
    title: ad.title,
    description: ad.description,
    images: [ad.image],
    email: ad.email,
    tags: ad.tags
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: CREATE_AD,
    payload: null
  }

}
