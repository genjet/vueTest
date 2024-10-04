<template>
  <div>
    <h1>這是主程式</h1>
    <h2>{{ title }}</h2>
    <course-info></course-info>
    <course-info></course-info>
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

<style lang="scss" scoped></style>