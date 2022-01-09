import axios from "axios";
const base = "https://tlwkg.sse.codesandbox.io";
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
