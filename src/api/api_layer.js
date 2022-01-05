import axios from 'axios';

axios.defaults.baseURL = `https://${process.env.VUE_APP_API}/`;
axios.defaults.headers = {
  'content-type': 'application/json',
  'x-rapidapi-host': process.env.VUE_APP_API,
  'x-rapidapi-key': process.env.VUE_APP_TOKEN,
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
