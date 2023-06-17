<template>
  <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand" href="#">Belajar Vue.js</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'about' }"
              >About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'contact' }"
              >Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'users' }"
              >User
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container py-4">
    <router-view></router-view>
  </div>
</template>

<script></script>
