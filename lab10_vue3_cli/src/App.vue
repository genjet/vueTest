<template>
  <div>
    <h1>這是主程式</h1>
    <h2>{{ title }}</h2>
    <course-intro v-for="c in courses" 
      :key="c.id" 
      :id="c.id" 
      :name="c.name" 
      :duration="c.duration"
      :current="c.current"
      @toggle-current="toggleCurrentStatus">
    </course-intro>
  </div>
</template>

<script>
export default {
  created() {
    console.log("App創建了")
    this.emitter.on('toggle-current', idx => {
      // alert(`${idx} will change status`)
      this.toggleCurrentStatus(idx)
    })
  },
  data() {
    return {
      title: "First Vue CLI program",
      courses: [
        { id: "POOP", name: "Python OOP", duration: 35, current: true },
        { id: "BDPY", name: "Big Data and Python", duration: 35, current: false },
        { id: "PYKT", name: "Python Keras and Tensorflow", duration: 35 },
      ]
    }
  },
  methods: {
    toggleCurrentStatus(id) {
      //alert(`toggle fired with id=${id}`)
      const course = this.courses.find(c => c.id === id)
      course.current = !course.current
      console.log(`反相${id}目前狀態是${course.current}`)
    }
  }
}
</script>

<style lang="css">
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 4px 8px rgba(0, 0, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}

#app button {
  font: interit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #C0FFEE;
  color: black;
}
</style>