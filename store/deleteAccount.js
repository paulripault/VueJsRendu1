
export const ACTIONS = {
  DELETE_USER_METHOD: 'deleteAccount/deleteUser',
}

export const state = () => ({
  name: "",
  password: "",
  status: false,
})

export const mutations = {
  DELETE_USER: (state) => {
    state.name = ""
    state.password = ""
    state.status = false
  }  
}

export const actions = {
  deleteUser({ commit }) {
    commit('DELETE_USER')
  },
}