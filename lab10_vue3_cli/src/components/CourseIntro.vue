<template>
  <div>
    <li>
      <h2>{{ id }} - {{ isCurrent }}</h2>
      <button @click="toggleCurrent">change Current</button>
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
  props: ["id", "name", "duration", "current"],
  data() {
    return {
      //course: { id: "POOP", name: "Python OOP", duration: "35hr" },
      detailsVisible: true,
      isCurrent: this.current

    }
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      this.isCurrent = !this.isCurrent
    }
  }
}
</script>


<style lang="scss" scoped></style>