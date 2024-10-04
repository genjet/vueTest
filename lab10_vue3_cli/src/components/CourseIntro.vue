<template>
  <div>
    <h1>單一課程簡介</h1>
    <h2>{{ course.id }}</h2>
    <button @click="toggleCourseDetail">show detail</button>
    <ul v-if="detailsVisible">
      <li>{{ course.name }}</li>
      <li>{{ course.duration }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      course: { id: "POOP", name: "Python OOP", duration: "35hr" },
      detailsVisible: true
    }
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    }
  }
}
</script>

<style lang="scss" scoped></style>