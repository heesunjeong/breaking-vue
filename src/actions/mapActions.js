import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function getPlace(searchWord, location, page, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.get('/api/maps/place', {
    params: {
      query: `${searchWord} ${location}`,
      page: !page ? 1 : page
    }
  })
    .then(res => callback(res.data))
    .catch(error => {
      //handleError(error);
    })
}
