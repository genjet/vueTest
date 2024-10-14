<template>
  <section>
    <h3>{{ userName }}</h3>
  </section>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup() {
    console.log("init composition API")
    const initName = "MarkHo"
    const currentName = ref(initName)
    console.log(initName)
    console.log(currentName)
    return {userName:currentName}
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>