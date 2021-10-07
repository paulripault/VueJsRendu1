<template>
  <div>
    <!--champs à remplir contenant le nom d'utilisateur --> 
    <v-text-field
      v-model="name"
      label="Nom d'utilisateur"
      required
    ></v-text-field>


    <!--champs à remplir contenant le mot de passe --> 
    <v-text-field v-model="mdp" label="Mot de passe" required></v-text-field>

    <!-- utton qui permet de enregistrer un nouvel utilisateur -->
    <v-btn color="success" @click="add"> S'enregistrer </v-btn>
  </div>
</template>

<script>
import { ACTIONS } from '~/store/users'

//Transfert des donnés récupérer dans le formulaire
export default {
  data: () => ({
    name: '',
    mdp: '',
  }),
  // méthode qui vas stocker le mot de passe et le nom de l'utilisateur
  methods: {
    add() {
      // console.log(this.name)
      // console.log(this.$store)
      this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
        name: this.name,
        mdp: this.mdp,
      })
    },
  },
}
</script>
