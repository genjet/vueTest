<template>
  <local-access></local-access>
  <internal-access></internal-access>
  <firebase-access></firebase-access>
</template>

<script>
import FirebaseAccess from './components/FirebaseAccess.vue';
import InternalAccess from './components/InternalAccess.vue';
import LocalAccess from './components/LocalAccess.vue';


export default {

  components: {
    FirebaseAccess,
    LocalAccess,
    InternalAccess
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