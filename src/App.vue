<script setup>
import AppMenu from './components/AppMenu.vue'
</script>

<template>
  <AppMenu />
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: var(--p-menubar-background); */
}

body {
  background: white !important;
  font-family: 'Inter', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
