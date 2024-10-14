<template>
  <h1>composition函數</h1>
  <button @click="toggleCourseDisplay">toggle course</button>
  <div v-if="displayCourse">
    <course-intro :courseId="courseId" :courseFullName="courseFullNameInput"></course-intro>
  </div>
  <h3>{{ courseDisplayFullName }}</h3>
  <button @click="course.duration += 7">時數加1天(bad)</button>
  <button @click="extraDuration">時數加1天</button>
  <hr />
  <input type="text" v-model="courseId" />
  <input type="text" v-model="courseFullName" />
  <hr />
  <input type="text" ref="courseFullNameInput" />
  <button @click="setCourseFullName">set course full name</button>
</template>

<script>
import { ref, reactive, computed, watch, provide } from 'vue'
import CourseIntro from './components/CourseIntro.vue';
export default {
  components: { CourseIntro },
  name: 'App',
  setup() {
    // display related
    const displayCourse = ref(true)
    function toggleCourseDisplay() {
      displayCourse.value = !displayCourse.value
    }
    // course related
    const courseId = ref("")
    const courseFullName = ref("")
    const courseFullNameInput = ref()
    function setCourseFullName() {
      courseFullName.value = courseFullNameInput.value.value
    }
    const courseDisplayFullName = computed(function () {
      console.log("calculate full name")
      return `[${courseId.value}]${courseFullName.value}`
    })
    const price = ref(24000)
    provide("price", price)
    // moniter value changes
    watch([price, courseDisplayFullName], function (newValue, oldValue) {
      if (oldValue[0] !== newValue[0]) {
        console.log(`價格由${oldValue[0]}到${newValue[0]}`)
      }
      if (oldValue[1] !== newValue[1]) {
        console.log(`課名由${oldValue[1]}到${newValue[1]}`)
      }

    })
    const course = reactive({ name: "POOP", duration: 35 })
    function extraDuration() {
      course.duration += 7
      price.value += 5000
    }


    return {
      course: course, extraDuration: extraDuration, price: price,
      courseDisplayFullName: courseDisplayFullName, courseId: courseId,
      courseFullName: courseFullName,
      courseFullNameInput: courseFullNameInput,
      setCourseFullName: setCourseFullName,
      displayCourse: displayCourse,
      toggleCourseDisplay: toggleCourseDisplay
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