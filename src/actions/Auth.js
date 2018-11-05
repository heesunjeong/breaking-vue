import * as userAction from "./userActions";

function authHeader() {
  let user = localStorage.getItem('user_token');

  if (user && user.token) {
    return {'Authorization': 'Bearer ' + user.token};
  } else {
    return {};
  }
}

export function authToken() {
  let user = localStorage.getItem('user_token') ? JSON.parse(localStorage.getItem('user_token')).token : '';

  if (user) {
    return `Bearer ${user}`;
  } else {
    return '';
  }
}

export function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userAction.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export function handleError(error) {
  const {status, data} = error.response;

  if(status === 500 || data.message == 'Not Match Signature' || data.message == 'Not Authenticated') {
    alert("로그인 후 리뷰를 작성해주세요.")
    userAction.logout();

    return false;
  } else {
    console.log(error);
  }
}

export function checkAuth() {
  let jwt = localStorage.getItem('user_token');

  if (jwt) {
    return true;
  } else {
    return false;
  }
}
