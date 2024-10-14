<template>
  <h1>composition函數</h1>
  <h2>{{ course }}/{{ price }}</h2>
  <h3>{{ courseDisplayFullName }}</h3>
  <button @click="course.duration += 7">時數加1天(bad)</button>
  <button @click="extraDuration">時數加1天</button>
  <hr />
  <input type="text" placeholder="courseId" v-model="courseId" />
  <input type="text" placeholder="courseFullName" v-model="courseFullName" />
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
  name: 'App',
  setup() {
    const courseId = ref("")
    const courseFullName = ref("")
    const courseDisplayFullName = computed(function () {
      console.log("calculate full name")
      return `[${courseId.value}]${courseFullName.value}`
    })
    const price = ref(24000)
    const course = reactive({ name: "POOP", duration: 35 })
    function extraDuration() {
      course.duration += 7
      price.value += 5000
    }
    
    return {
      course: course, extraDuration: extraDuration, price: price,
      courseDisplayFullName: courseDisplayFullName, courseId: courseId,
      courseFullName: courseFullName
    }
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