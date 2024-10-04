<template>
  <div>
    <li>
      <h2>{{ id }}</h2>
      <button @click="toggleCourseDetail">show detail</button>
      <ul v-if="detailsVisible">
        <li>{{ name }}</li>
        <li>{{ duration }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "duration"],
  data() {
    return {
      //course: { id: "POOP", name: "Python OOP", duration: "35hr" },
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