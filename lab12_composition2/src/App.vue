<template>
  <h1>composition函數</h1>
  <h2>{{ course }}/{{ price }}</h2>
  <h3>{{ courseDisplayFullName() }}</h3>
  <button @click="course.duration+=7">時數加1天(bad)</button>
  <button @click="extraDuration">時數加1天</button>
  <hr/>
  <input type="text" placeholder="courseId" @input="setCourseId" :value="courseId"/>
  <input type="text" placeholder="courseFullName" @input="setCourseFullName" :value="courseFullName"/>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    const courseId = ref("bdpy")
    const courseFullName = ref("python and big data")
    const courseDisplayFullName = function(){
      console.log("calculate full name")
      return `[${courseId.value}]${courseFullName.value}`
    }
    const price = ref(24000)
    const course = reactive({ name: "POOP", duration: 35 })
    function extraDuration(){
      course.duration += 7
      price.value += 5000
    }
    function setCourseId(event){
      courseId.value = event.target.value
    }
    function setCourseFullName(event) {
      courseFullName.value = event.target.value
    }

    return {course:course, extraDuration:extraDuration,price:price,
      courseDisplayFullName:courseDisplayFullName,setCourseId:setCourseId,
      setCourseFullName:setCourseFullName,courseId:courseId,
      courseFullName:courseFullName
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