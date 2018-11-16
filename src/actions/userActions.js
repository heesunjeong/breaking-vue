import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function login(username, password) {
  return axios.post('/api/user/login', {email: username, password: password})
    .then(res => {
      localStorage.setItem('user_token', JSON.stringify(res.data));
      return true;
    }).catch(error => {
      alert("로그인에 실패하였습니다.\n계정 정보를 다시 한번 확인해주세요.");
      return false;
    })
}

export function join(userInfo) {
  return axios.post('/api/user/register', userInfo)
    .then(res => {
      alert("우리 오늘 맛집 뿌셔?에 오신걸 환영합니다. :) ");
      //TODO 회원가입후 자동 로그인 ..?

      return true;
    }).catch(error => {
      handleError(error);
    })
}

export function update(userInfo) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/user/update', userInfo)
    .then(res => {
      return res.data;
    }).catch(error => {
      handleError(error);
    })
}

export function updatePassword(password) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/user/password', password)
    .then(res => {
      return res.data;
    }).catch(error => {
      handleError(error);
    })
}

export function logout() {
  localStorage.removeItem('user_token');

  //window.history.pushState("", "", "/#/login");
  location.href = "/#/login";
}

export function getUserInfo(userId) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.get(`/api/user/info/${!userId ? 0 : userId}`)
    .then(res => {
      return res.data;
    }).catch(error => {
      handleError(error);
    })
}
