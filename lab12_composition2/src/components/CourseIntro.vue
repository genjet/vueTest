<template>
    <p>課程資訊</p>
    <h3>course:{{ course }}</h3>
    <h3>:price:{{ price }}</h3>
</template>

<script>
import { computed, inject } from "vue";
export default {
    props: ["courseId", "courseFullName"],
    setup(props) {
        const course = computed(
            function () {
                if (!props.courseFullName) {
                    return `[${props.courseId}]`
                }
                return `[${props.courseId}]==>${props.courseFullName.value}`
            }
        )
        const price = inject("price")
        return { course: course, price: price }
    }
}
</script>

<style lang="scss" scoped></style>