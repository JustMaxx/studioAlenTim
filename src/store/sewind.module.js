import sewindService from "../services/sewind.service"

const sewindModule = {
  namespaced: true,
  state:{
    dates:[],
    status:null,
  },
  actions:{
    getDates({commit}){
      return sewindService.getDates()
      .then((data)=>{
        console.log(data)
        commit('get_dates',data)})
    },
    addDate({commit},item){
      return sewindService.addDate(item.date,item.limit)
      .then((data)=>commit('add_date',data))
    },
    removeDate({commit},id){
      return sewindService.removeDate(id)
      .then((data)=>commit('remove_date',data))
    },
    getAvlDates({commit}){
      return sewindService.getAvlDates()
      .then(data=>commit('get_available_dates',data))
    }
  },
  mutations:{
    get_dates(state, dates){
      state.dates = dates
    },
    get_available_dates(state,dates){
      state.dates = dates
    },
    add_date(state, msg){
      state.status = msg
    },
    remove_date(state,msg){
      state.status = msg
    } 
  },
  getters:{
    getDates(state){
      return state.dates
    }
  }
}
export default sewindModule