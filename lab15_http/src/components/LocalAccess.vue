<template>
    <div>
        <h1>vbase3</h1>
        <h2>{{ course }}</h2>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup () {
        const course=ref({id:"POOP",name:"Python OOP",duration:35})

        return {course}
    }
}
</script>

<style lang="scss" scoped>

</style>