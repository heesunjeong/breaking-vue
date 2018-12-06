import axios from 'axios';
import {authToken, handleError} from "./Auth";

export function login(username, password, callback) {
  return axios.post('/api/user/login', {email: username, password: password})
    .then(res => callback(res.data))
    .catch(error => {
      alert("로그인에 실패하였습니다.\n계정 정보를 다시 한번 확인해주세요.");
    })
}

export function join(userInfo, callback) {
  return axios.post('/api/user/register', userInfo)
    .then(res => callback(res.data))
    .catch(error => handleError(error));
}

export function update(userInfo, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/user/update', userInfo)
    .then(res => callback(res.data))
    .catch(error => handleError(error));
}

export function updatePassword(password, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.put('/api/user/password', password)
    .then(res => callback(res.data))
    .catch(error => handleError(error));
}

export function logout() {
  localStorage.removeItem('user_token');

  //window.history.pushState("", "", "/#/login");
  location.href = "/#/login";
}

export function getUserInfo(userId, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.get(`/api/user/info/${!userId ? 0 : userId}`)
    .then(res => callback(res.data))
    .catch(error => handleError(error));
}

export function findPassword(email, callback) {
  axios.defaults.headers.common['Authorization'] = authToken();

  return axios.get(`/api/user/findPassword/${email}`)
    .then(res => callback(res.data))
    .catch(error => handleError(error));
}

export function validationUserId(userId, callback) {
  return axios.get(`/api/user/validate/${userId}`)
    .then(res => callback(res.data))
    .catch(error => {
    });
}
