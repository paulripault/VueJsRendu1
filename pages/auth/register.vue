<template>
  <div>
    <v-btn :disabled="!valid" color="primary" class="mr-4" @click="bar"
      >Revenir en arrière</v-btn
    >
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="Nom"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :counter="20"
        :rules="passwordRules"
        label="Mot de Passe"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"
        >Connexion</v-btn
      >
      <v-btn color="error" class="mr-4" @click="reset">Vider les champs</v-btn>
    </v-form>
  </div>
</template>


<script>
import { ACTIONS } from "~/store/localStorage";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Votre nom ne peut pas être vide",
      (v) =>
        (v && v.length <= 20) ||
        "Votre nom ne doit pas dépasser les 20 caractères",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Votre mot de passe ne peut pas être vide"],
  }),

  methods: {
    validate() {
      this.$store.dispatch(ACTIONS.LOGIN_USER_METHOD, {
        name: this.name,
        password: this.password,
      });
      if (this.name && this.password != null) {
        this.$router.push("/dashboard");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    bar() {
      this.$router.push("/");
    },
  },
};
</script>