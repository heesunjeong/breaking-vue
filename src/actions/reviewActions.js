import axios from 'axios';
import {authToken, handleError} from "./Auth";
import * as userAction from './userActions'

export function getReviewByAuthor(userId) {
  return axios.get(`/api/review/author/${userId}`)
    .then(res => {
      return res.data;
    }).catch(error => {
      console.log(error)
    })
}

export function getReviewInfo(storeKey, page) {
  return axios.get(`/api/review/list`, {params: {storeKey, page}})
    .then(res => {
      return res.data;
    }).catch(error => {
      //handleError(error);
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
      if (res.data) {
        alert('리뷰가 등록되었습니다.');
      } else {
        alert('리뷰등록을 실패하였습니다.\n잠시 후에 다시 시도해주세요.');
      }
      return !!res.data;
    }).catch(error => {
      handleError(error);
    })
}

export function editReview(review) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/review/update', review)
    .then(res => {
      if (res.data) {
        alert('리뷰가 수정되었습니다.');
      } else {
        alert('리뷰 수정을 실패하였습니다.\n잠시 후에 다시 시도해주세요.');
      }
      return !!res;
    }).catch(error => {
      handleError(error);
    })
}

export function deleteReview(id) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.delete(`/api/review/${id}`)
    .then(res => {
      if (res.data) {
        alert('리뷰가 삭제되었습니다');
      } else {
        alert('리뷰 삭제를 실패하였습니다.\n잠시 후에 다시 시도해주세요.');
      }
      return !!res.data;
    }).catch(error => {
      handleError(error);
    })
}
