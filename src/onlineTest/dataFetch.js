import axios from "axios";
const base = "https://onlinetest2308.herokuapp.com";
function post(url, product) {
  return axios.post(base + url, product);
}
function get(url) {
  return axios.get(base + url);
}
export default {
  post,
  get
};
