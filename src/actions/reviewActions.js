import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function getReviewInfo(storeKey, page, size) {
  return axios.get(`/api/review/list`, {params: {storeKey, page, size}})
    .then(res => {
      return res.data;
    }).catch(error => {
      //handleError(error);
    })
}

export function getReviewByAuthor(userId, page, size) {
  return axios.get(`/api/review/author`, {params: {userId, page, size}})
    .then(res => {
      return res.data;
    }).catch(error => {
      console.log(error)
    })
}

export function getCountReview(storeKey) {
  return axios.get(`/api/review/count`, {params: {storeKey}})
    .then(res => {
      return res.data;
    }).catch(e => {

    })
}

export function saveReview(key, review) {
  axios.defaults.headers.common['Authorization'] = authToken();

  let data = {
    storeKey: key,
    contents: review
  };

  return axios.post('/api/review/create', data)
    .then(res => {
      return res.data;
    }).catch(error => {
      handleError(error);
    })
}

export function editReview(review) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/review/update', review)
    .then(res => {
      return res.data;
    }).catch(error => {
      handleError(error);
    })
}

export function deleteReview(id) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.delete(`/api/review/${id}`)
    .then(res => {
      return res.data;
    }).catch(error => {
      handleError(error);
    })
}
