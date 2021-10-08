<template>
  <div>
    <v-btn color="primary" class="mr-4" @click="log">Se connecter</v-btn>
    <v-btn color="primary" class="mr-4" @click="res">S'inscrire</v-btn>
    <v-btn color="primary" class="mr-4" @click="foo">Tableau de bord</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    log() {
      this.$router.push("../auth/login");
    },
    res() {
      this.$router.push("../auth/register");
    },
    foo() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
