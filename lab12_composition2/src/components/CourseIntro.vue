<template>
    <p>課程資訊</p>
    <h3>course:{{ course }}</h3>
    <h3>price:{{ price }}</h3>
</template>

<script>
export default {
    props: ["courseId","courseFullName", "price"],
    computed:{
        course(){
            if (!this.courseFullName) {
                return `[${this.courseId}]`
            }
            return `[${this.courseId}]${this.courseFullName.value}`
        }
    }
}
</script>

<style lang="scss" scoped></style>