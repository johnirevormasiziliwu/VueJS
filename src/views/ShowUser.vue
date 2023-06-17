<template>
    <div class="mb-3">
      <router-link :to="{ name: 'users' }">Kembali</router-link>
    </div>
  
    <div v-if="!isLoading">
      <p class="text-muted mb-0">Nama</p>
      <h6>{{ user.name }}</h6>
  
      <p class="text-muted mb-0">Username</p>
      <h6>{{ user.username }}</h6>
    </div>
  
    <div v-else>Loading...</div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    props: ["id"],
    data() {
      return {
        user: null,
        isLoading: true,
      };
    },
    methods: {
      getUser() {
        const id = this.$route.params.id;
        axios.get(`/users/${id}`).then(response => {
          this.isLoading = false;
          this.user = response.data;
        });
      },
    },
    mounted() {
      this.getUser();
    },
  };
  </script>
  
  <style></style>