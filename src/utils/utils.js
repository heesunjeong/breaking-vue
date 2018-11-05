export const isNotNull = (value) => {
  return value.replace(/\s|　/gi, '');
};

export const getUserName = () => {
  return localStorage.getItem('user_token') ? JSON.parse(localStorage.getItem('user_token')).name : ''
}
