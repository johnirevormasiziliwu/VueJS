<template>
    <input type="text" v-model="name" class="form-control mb-2" />
    <h6>{{ greetingName }}</h6>
  
    <hr />
  
    <h6>Todo</h6>
    <div class="input-group mb-3">
      <input
        type="text"
        v-model="todoInput"
        class="form-control"
        placeholder="Write todo here..."
      />
      <button @click="addTodo" class="btn btn-primary">Add</button>
    </div>
    <ul v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
    <div v-else class="text-center text-muted">-empty data-</div>
  
    <hr />
  
    <h6>Employee</h6>
    <ul v-if="isLoading">
      <li v-for="user in users" :key="user.id">
        <a href="">{{ user.name }}</a>
      </li>
    </ul>
  
    <div v-else>Loading...</div>
  </template>
  
  <!-- Option API -->
  <script>
  import axios from "axios"
  export default {
    data() {
      return {
        name: "Junaidi Abdul Rahman",
        todoInput: "",
        todos: [],
        users: [],
        isLoading: false,
      };
    },
    computed: {
      greetingName() {
        return "Good Morning Mr. " + this.name;
      },
    },
    methods: {
      addTodo() {
        this.todos.push(this.todoInput);
        this.todoInput = "";
      },
      getUsers() {
        axios.get("/users").then(response => {
            this.isLoading = true;
            this.users = response.data;
        });
      },
      
    },
    mounted() {
      this.getUsers();
    },
  };
  </script>