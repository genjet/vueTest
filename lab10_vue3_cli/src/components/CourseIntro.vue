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
  // props: ["id", "name", "duration", "current"],
  props: {
    id: { type: String, required: true }, name: { type: String, required: true },
    duration: {
      type: String, required: true, validator: function (v) {
        return parseInt(v) > 7;
      }
    }, current: { type: String, required: false, default: "false" }
  },
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