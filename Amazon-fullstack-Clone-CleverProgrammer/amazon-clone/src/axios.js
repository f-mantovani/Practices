import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-e9c9b.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-e9c9b/us-central1/api' // API URL {cloud function}
});

export default instance;