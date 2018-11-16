import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function getPlace(searchWord, location) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.get('/api/maps/place', {
    params: {
      query: `${searchWord} ${location}`
    }
  })
    .then(res => {
      if (res) {
        const data = {q: this.searchWord, near: this.near};

        this.$store.commit(Types.SEARCH_TASTYLOAD, data);
        this.$store.commit(Types.SEARCH_RESULT, res.data);
        this.$router.push({name: 'explore', query: data});
      }
    })
    .catch(error => {
      //handleError(error);
    })
}
