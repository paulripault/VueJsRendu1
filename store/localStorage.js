
export const state = () => ({
  name: "",
  password: "",
  status: false,
})

export const ACTIONS = {
  LOGIN_USER_METHOD: 'localStorage/loginUser',
}

export const mutations = {
  LOGIN_USER: (state, data) => {
    state.name = data.name,
    state.password = data.password,
    state.status = true
  }  
}

export const actions = {
  loginUser({ commit }, data) {
    commit('LOGIN_USER', data)
  },
}