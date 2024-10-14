<template>
  <section>
    <h3>full user object:{{ user }}</h3>
    <h3>get name by user:{{ user.userName }}</h3>
    <h3>get age by user:{{ user.age }}</h3>
    <h3>user={{ userName }},age={{ age }}</h3>
  </section>
</template>


<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const initUser = {
      userName: 'Mark Ho',
      age: 48
    }
    const user = ref(initUser)
    setTimeout(function () {
      user.value.userName = "Meng-Hang Ho"
      user.value.age = 49
    }, 2000)
    return { user: user, userName: user.value.userName, age: user.value.age }
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