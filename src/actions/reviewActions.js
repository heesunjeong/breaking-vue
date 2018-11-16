import axios from 'axios';

export function getReviewByAuthor(userId) {
  return axios.get(`/api/review/author/${userId}`)
    .then(res => {
      return res.data;
    }).catch(error => {
      console.log(error)
    })
}
