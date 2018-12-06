import * as userAction from "./userActions";

export function authToken() {
  let user = localStorage.getItem('user_token') ? JSON.parse(localStorage.getItem('user_token')).token : '';

  if (user) {
    return `Bearer ${user}`;
  } else {
    return '';
  }
}

export function handleError(error) {
  const {status, data} = error.response;

  if (status == 401) {
    //alert("세션이 만료되었습니다. 다시 로그인해주세요.");
    userAction.logout();
  } else {
    return false;
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
