import axios from 'axios';
import {authToken, handleError} from './Auth';
import * as userAction from './userActions'

axios.defaults.headers.common['Authorization'] = authToken();

export function getStoreInfo(storeName) {
  return axios.get('/api/maps/place', {params: {query: storeName}})
    .then(res => {
      if (res) {
        return res.data.documents;
      }
    }).catch(error => {
      //handleError(error);
    })
};

export function getReviewInfo(storeId) {
  return axios.get(`/api/review/${storeId}`)
    .then(res => {
      return res.data;
    }).catch(error => {
      //handleError(error);
    })
}

export function saveReview(id, review) {
  axios.defaults.headers.common['Authorization'] = authToken();

  let data = {
    storeId: id,
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
