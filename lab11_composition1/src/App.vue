<template>
  <section>
    <h3>full user object:{{ user }}</h3>
    <h3>get name by user:{{ user.userName }}</h3>
    <h3>get age by user:{{ user.age }}</h3>
    <h3>user={{ userName }},age={{ age }}</h3>
  </section>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    const initUser = {userName:'Mark Ho', 
      age:48
    }
    const user = reactive(initUser)
    setTimeout(function () {
      user.userName = "Meng-Hang Ho"
      user.age += 1
    }, 2000)
    return { user:user,userName:user.userName,age:user.age }
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