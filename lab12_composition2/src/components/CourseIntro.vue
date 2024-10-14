<template>
    <p>課程資訊</p>
    <h3>course:{{ course }}</h3>
    <h3>:price:{{ price }}</h3>
</template>

<script>
import {
    computed, inject, onBeforeMount, onMounted,
    onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
} from "vue";
export default {
    props: ["courseId", "courseFullName"],
    setup(props) {
        onBeforeMount(() => {
            console.log("before mount")
        });
        onMounted(() => {
            console.log("after mount")
        });
        onBeforeUpdate(() => {
            console.log("before update")
        })
        onUpdated(() => {
            console.log("after update")
        })
        onBeforeUnmount(()=>{
            console.log("before unmount")
        })
        onUnmounted(()=>{
            console.log("after unmount")
        })
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