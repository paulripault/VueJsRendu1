<template>
  <div>
    <v-btn color="primary" class="mr-4" @click="bar"
      >Revenir en arrière</v-btn
    >
    <!-- Render of the title and the list of clients -->
    <h1>{{ title }}</h1>
    <h3>{{ list }}</h3>
    <div v-if="$store.state.localStorage.status == false">
      Pas d'utilisateurs connecté
    </div>
    <div v-if="$store.state.localStorage.status == true">
      {{ this.$store.state.localStorage.name }}
      <v-btn color="primary" class="mr-4" @click="reset">se deconnecter</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">supprimer mon compte</v-btn>
    </div>
  </div>
</template>

<script>
import { ACTIONS } from "~/store/account";

export default {
  data: () => ({
    title: "Tableau de bord ",
    list: "Liste des utilisateurs",
  }),
  methods: {
    reset() {
      this.$store.dispatch(ACTIONS.DELETE_USER_METHOD, {
        name: this.$store.state.localStorage.name,
        password: this.$store.state.localStorage.password,
        status: this.$store.state.localStorage.status,
      });
    },
    bar() {
      this.$router.push("/welcome");
    },
  },
};
</script> 
