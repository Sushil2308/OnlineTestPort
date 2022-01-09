const key = "userDetails";

function login(ob) {
  localStorage.setItem(key, JSON.stringify(ob));
}

function logOut() {
  localStorage.removeItem(key);
}
function isLogin() {
  try {
    let str = window.localStorage.getItem(key);
    let ob = JSON.parse(str);
    return ob;
  } catch (e) {
    return "";
  }
}
export default {
  login,
  logOut,
  isLogin
};
