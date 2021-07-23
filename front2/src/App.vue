<template>
<div class="flex-row">
  <div id="nav">
    <router-link to="/">All</router-link>
    <router-link to="/createtrn">New</router-link>
  </div>
  <router-view />
</div>
</template>

<style>
@import "../public/css/flex-grid.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
  width: 3rem;
  line-height: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0;
}
</style>
