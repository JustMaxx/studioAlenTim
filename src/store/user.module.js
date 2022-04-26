import userService from "../services/user.service"

const userModule = {
  namespaced: true,
  state:{
    user:{}
  },
  actions:{
    setUser({commit},user){
      return userService.getUserData(user)
      .then(user=>{
        commit('set_user',user)
      })
    }
  },
  mutations:{
    set_user(state,user){
      state.user = user
      return Promise.resolve(user);
    }
  },
  getters:{
    getUserData(state){
      return state.user
    }
  }
}
export default userModule