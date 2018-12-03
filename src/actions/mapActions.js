import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function getPlace(searchWord, location, page) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.get('/api/maps/place', {
    params: {
      query: `${searchWord} ${location}`,
      page: !page ? 1 : page
    }
  })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      //handleError(error);
    })
}

export function saveStore(store) {
  const {address_name, category_name, id, phone, place_name, road_address_name, x, y} = store;

  return axios.post('/api/maps/store', {
    name: place_name,
    address: '',
    storeKey: id,
    category: category_name,
    phone: phone,
    x,
    y
  },).then(res => {
    console.log(res);
  }).catch(error => {

  });

}

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
