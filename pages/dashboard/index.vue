<template>
  <div>
    <!-- Render of the title and the list of clients -->
    <h1>{{ title }}</h1>
    <h3>{{ list }}</h3>
    <div v-if="$store.state.users.users.length == 0">Pas d'utilisateurs</div>

    <ul v-else>
      <v-avatar color="teal" size="8"></v-avatar>
      <li v-for="(user, i) in $store.state.users.users" :key="i">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Tableau de bord ",
      list: "Liste des utilisateurs",
    };
  },
};
</script> 

