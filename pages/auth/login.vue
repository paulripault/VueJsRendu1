<template>
  <div>
    <!-- {{ $localStorageLoaded }}
    {{ $store.state.localStorage.name }}
    {{ $store.state.localStorage.password }}
    {{ $store.state.localStorage.status }} -->

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Nom" required></v-text-field>
      <v-text-field v-model="password" :counter="20" :rules="passwordRules" label="Mot de Passe" required></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Connexion</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Vider les champs</v-btn>
    </v-form>
  </div>
</template>


<script>
export default {
  data: () => ({
    valid: true,
    //name: this.$store.state.localStorage.name,
    nameRules: [
      (v) => !!v || "Votre nom ne peut pas être vide",
      (v) =>
        (v && v.length <= 20) ||
        "Votre nom ne doit pas dépasser les 20 caractères",
    ],
    //password: this.$store.state.localStorage.password,
    passwordRules: [(v) => !!v || "Votre mot de passe ne peut pas être vide"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    name() {
      return this.$store.state.localStorage.name
    },
    password() {
      return this.$store.state.localStorage.password
    },
    loaded() {
      return (
        this.$store.state.localStorage.name &&
        this.$store.state.localStorage.status
      );
    },
  },
};
</script>

