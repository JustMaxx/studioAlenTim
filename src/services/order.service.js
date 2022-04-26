import axios from 'axios';

const API_URL = 'http://localhost:8080/api/order/';

class OrderModule {
addNewOrder(order,adress){
  return axios.post(API_URL+'addNewOrder', {order, adress})
  .then((res)=>{
    return res.data
  })
}
getUserOrder(userId){
  return axios.post(API_URL + 'orderById',{userId})
  .then((res)=>{
    console.log(res)
    return res.data
  })
}
getAllOrders(){
  return axios.post(API_URL + 'getAll')
  .then(res=>res.data)
}
}

export default new OrderModule()