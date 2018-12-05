import axios from 'axios';
import {authToken, handleError} from './Auth';

axios.defaults.headers.common['Authorization'] = authToken();

export function getStoreInfo(storeKey) {
  return axios.get('/api/store/info', {params: {storeKey}})
    .then(res => {
      if (res) {
        return res.data;
      }
    }).catch(error => {
      //handleError(error);
    })
};

export function saveStore(store) {
  const {address_name, category_name, id, phone, place_name, road_address_name, x, y} = store;

  return axios.post('/api/store/save', {
    name: place_name,
    address: address_name || road_address_name,
    storeKey: id,
    category: category_name,
    phone: phone,
    x,
    y
  },)
    .then(res => {
      return res.data;
    }).catch(error => {

    });
};
