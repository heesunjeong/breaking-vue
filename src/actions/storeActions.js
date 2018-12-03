import axios from 'axios';
import {authToken, handleError} from './Auth';

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
