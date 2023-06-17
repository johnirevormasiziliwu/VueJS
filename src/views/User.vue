<template>
    <h6 class="mb-3">Data User</h6>
  
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th width="10">No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users.length">
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.street }}</td>
            <td>{{ user.company.name }}</td>
            <td>
            <router-link
              :to="{
                name: 'users.show',
                params: {
                  id: user.id,
                },
              }"
              class="btn btn-primary btn-sm"
              >Detail
            </router-link>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6" class="text-center">-no data-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        users: [],
      };
    },
    methods: {
      getUsers() {
        axios.get("/users").then(response => {
          this.users = response.data;
        });
      },
    },
    mounted() {
      this.getUsers();
    },
  };
  </script>
  
  <style></style>