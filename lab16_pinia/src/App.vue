<script setup>
import Counter1 from './components/Counter1.vue'
import Counter2 from './components/Counter2.vue'
</script>

<template>
  <Counter1></Counter1>
  <Counter2></Counter2>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>