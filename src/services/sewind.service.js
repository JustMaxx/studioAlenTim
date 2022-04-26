import axios from 'axios';

const API_URL = 'http://localhost:8080/api/sewind/';

class SewindService {
  getDates() {
    return axios.post(API_URL + 'getDates')
    .then(res=>res.data)
  }

  addDate(date,limit) {
    return axios.post(API_URL + 'addDate', { date,limit })
    .then(res=>res.data)
  }

  removeDate(id) {
    return axios.post(API_URL + 'removeDate', { id })
    .then((res=>res.data))
  }

  getAvlDates(){
    return axios.post(API_URL + 'getAvlDates')
    .then(res=>res.data)
  }
}

export default new SewindService();
