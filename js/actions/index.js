export const FETCH_ADS = 'FETCH_ADS';
export const CREATE_AD = 'CREATE_AD';
import axios from 'axios';
import {get} from 'jquery';

export function fetchAds(category) {
  // api call
  let url = ('/api/findCategory/' + category)
  const request = axios.get(url)
  return {
    type: FETCH_ADS,
    payload: request
  }
}


export function createAd(ad) {
  // api call
  console.log(ad)
  let url = ('/api/createPost/')
  axios.post(url, {
    category: ad.category,
    title: ad.title,
    description: ad.description,
    images: [ad.image],
    email: ad.email,
    tags: ['sell']
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
