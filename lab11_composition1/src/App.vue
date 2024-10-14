<template>
  <section>
    <h1>會reactive</h1>
    <h3>full user object:{{ user }}</h3>
    <h3>get name by user:{{ user.userName }}</h3>
    <h3>get age by user:{{ user.age }}</h3>
    <hr />
    <h1>固定值的</h1>
    <h3>user={{ userName }},age={{ age }}</h3>
    <h3>courseName={{ courseName }},duration={{ duration }}</h3>
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef, toRefs } from 'vue'
export default {
  name: 'App',
  setup() {
    const currentAge = ref(43)
    const initUser = {
      userName: 'Mark Ho',
      age: 48
    }
    const user = reactive(initUser)
    const course = reactive({ courseName: 'poop', duration: 35 })
    const courseRef = toRefs(course)
    console.log(course)
    console.log(courseRef)
    // course.duration += 7
    // console.log("reactive object course:", course.duration)
    // console.log("reactive object property to Ref:", courseRef.duration.value)
    // courseRef.duration.value += 7
    // console.log("reactive object course:", course.duration)
    // console.log("reactive object property to Ref:", courseRef.duration.value)
    // console.log("********************")
    console.log(currentAge, user)
    console.log(currentAge.value, user.age, user.userName)
    console.log(`currentAge is a reactive variable? ${isReactive(currentAge)}`)
    console.log(`currentAge is a ref variable? ${isRef(currentAge)}`)
    console.log(`user is a ref variable?${isRef(user)}, is a reactive variable?${isReactive(user)}`)

    setTimeout(function () {
      user.userName = "Meng-Hang Ho"
      user.age += 1
      course.courseName = "Python OOP"
      course.duration += 7
      console.log(`修改完是:${course.courseName},${course.duration}`)
      console.log(`[ref]修改完是:${courseRef.courseName.value},${courseRef.duration.value}`)
      setTimeout(() => {
        courseRef.courseName.value = "Python物件導向"
        courseRef.duration.value += 7
        console.log(`修改完是:${course.courseName},${course.duration}`)
        console.log(`[ref]修改完是:${courseRef.courseName.value},${courseRef.duration.value}`)

      }, 1000)
    }, 2000)
    // return {
    //   user: user, userName: user.userName, age: user.age, courseName: courseRef.courseName,
    //   duration: courseRef.duration
    // }
    return {
      user: user, userName: user.userName, age: user.age, ...toRefs(course)
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