//Appelle l'action users/addUser
export const ACTIONS = {
    ADD_USER_METHOD: 'users/addUser',
  }
  
  //Création d'une liste d'utilisateur via un tableau vide
  export const state = () => ({
    users: [],
  })
  

  //Envois les donner récupérer dans le formulaire vers le tableau
  export const mutations = {
    ADD_USER: (state, data) => state.users.push(data),
  }
  
  //Envois les données du formulire dans ASS_USER
  export const actions = {
    addUser({ commit }, data) {
      commit('ADD_USER', data)
    },
  }
  