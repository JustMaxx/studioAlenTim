import OrderModule from '../services/order.service'
const orderModule = {
  namespaced:true,
  state:{
    orderId:'',
    order:{
      name:'',
      secondName:'',
      email:'',
      phone:'',
      city:'',
      streetTitle:'',
      streetNumber:'',
      houseNumber:'',
      adressContact:'',
      comment:'',
      measurement:[],
      userId:'',
      sewindId:'',
      sewindDate:'',
    },
    userOrder:{},
    orders:[]
  },
  mutations:{
    SET_PERSONAL_INFO(state,payload){
      state.order.name = payload.name
      state.order.secondName = payload.secondName
      state.order.email = payload.email
      state.order.phone = payload.phone
      state.order.city = payload.city
      state.order.streetTitle = payload.streetTitle
      state.order.streetNumber = payload.streetNumber
      state.order.houseNumber = payload.houseNumber
      state.order.adressContact = payload.adressContact
      state.order.comment = payload.comment
      state.order.userId = payload.id
      state.order.sewindId = payload.dateId
      state.order.sewindDate = payload.sewindDate
    },
    SET_MEASUREMENT(state,payload){
      state.order.measurement = payload
    },
    ADD_NEW_ORDER(state,payload){
      state.orderId = payload
    },
    SET_USER_ORDER(state,payload){
      state.userOrder = payload
    },
    SET_ALL_ORDERS(state,payload){
      state.orders = payload
    }
  },
  actions:{
    setPersonalInfo({commit}, data){
      commit('SET_PERSONAL_INFO',data)
    },
    setMeasurement({commit}, data){
      commit('SET_MEASUREMENT',data)
    },
    addNewOrder({commit,state}){
      OrderModule.addNewOrder(state.order, 
        (state.order.city + ',' + state.order.streetTitle + ',' + state.order.streetNumber + ',' + state.order.houseNumber).split(',')
      )
      .then((msg)=>{
        console.log(msg)
        commit('ADD_NEW_ORDER', msg)
      }) 
    },
    setUserOrder({commit},userId){
      OrderModule.getUserOrder(userId)
      .then((order)=>{
        commit('SET_USER_ORDER', order)
      })
    },
    setAllOrders({commit}){
      OrderModule.getAllOrders()
      .then((res)=>{
        commit('SET_ALL_ORDERS',res)
      })
    }
  },
  getters:{
    getAllInfo(state){
      return state.order
    },
    getMeasurement(state){
      return state.order.measurement
    },
    getOrderId(state){
      return state.orderId
    },
    getUserOrder(state){
      return state.userOrder
    },
    getAllOrders(state){
      return state.orders
    },
    getOrderById:state=>id=>{
      return state.orders.find(el=>el.id==id)
    }
  }
}

export default orderModule