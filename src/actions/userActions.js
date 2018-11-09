import axios from 'axios';
import {authToken} from "./Auth";

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
      console.log(error)
    })
}

export function logout(router) {
  localStorage.removeItem('user_token');

  if (router) {
    router.push({name: 'login'});
  } else {
    location.reload(true);
  }
}

export function getUserInfo(router) {
  axios.defaults.headers.common['Authorization'] = authToken();
  return axios.get('/api/user/info')
    .then(res => {
      return res.data;
    }).catch(error => {
      alert("세션이 만료되었습니다. 다시 로그인해주세요.")
      logout(router);
      //TODO 로그인페이지로 이동시키기
    })
}
