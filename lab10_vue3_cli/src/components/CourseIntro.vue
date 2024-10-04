<template>
  <div>
    <li>
      <h2>{{ id }} - {{ current }}</h2>
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
  //emits:['toggle-current'],
  emits: {
    'toggle-current': function (id) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing")
        return false;
      }
    }
  },
  // props: ["id", "name", "duration", "current"],
  props: {
    id: { type: String, required: true }, name: { type: String, required: true },
    duration: {
      type: Number, required: true, validator: function (v) {
        return v > 7;
      }
    }, current: { type: Boolean, required: false, default: false }
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
      //this.isCurrent = !this.isCurrent
      this.$emit('toggle-current', this.id)
      //this.$emit('toggle-current')
      //this.emitter.emit('toggle-current', this.id)
    }
  }
}
</script>


<style lang="scss" scoped></style>