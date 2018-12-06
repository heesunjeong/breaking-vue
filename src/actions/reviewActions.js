import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function getReviewInfo(storeKey, page, size, callback) {
  return axios.get(`/api/review/list`, {params: {storeKey, page, size}})
    .then(res => callback(res.data))
    .catch(error => {
      //handleError(error);
    })
}

export function getReviewByAuthor(userId, page, size) {
  return axios.get(`/api/review/author`, {params: {userId, page, size}})
    .then(res => res.data)
    .catch(error => {
      console.log(error)
    })
}

export function getCountReview(storeKey, callback) {
  return axios.get(`/api/review/count`, {params: {storeKey}})
    .then(res => callback(res.data))
    .catch(e => {
    })
}

export function saveReview(key, review, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  let data = {
    storeKey: key,
    contents: review
  };

  return axios.post('/api/review/create', data)
    .then(callback)
    .catch(error => {
      handleError(error);
    })
}

export function editReview(review, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/review/update', review)
    .then(res => callback(res.data))
    .catch(error => {
      handleError(error);
    })
}

export function deleteReview(id, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.delete(`/api/review/${id}`)
    .then(res => callback(res.data))
    .catch(error => {
      handleError(error);
    })
}
