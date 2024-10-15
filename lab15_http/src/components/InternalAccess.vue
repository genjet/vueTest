<template>
    <div>
        <h1>vbase3 setup</h1>
        <h2>{{ course }}</h2>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const course=ref({id:"POOP",name:"Python OOP",duration:35})
</script>

<style lang="scss" scoped>

</style>