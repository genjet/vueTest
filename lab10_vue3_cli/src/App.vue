<template>
  <div>
    <h1>這是主程式</h1>
    <h2>{{ title }}</h2>
    <course-intro id="poop" name="python oop" duration=35></course-intro>
    <course-intro id="bdpy" name="python and big data" duration=35></course-intro>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "First Vue CLI program"
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