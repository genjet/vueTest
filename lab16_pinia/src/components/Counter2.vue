<template>
    <div>
        <h1>this is counter2</h1>
        <h2>counter={{ getCounter }}</h2>
    </div>
</template>

<script setup>
import {useCounterStore} from '../store/counter.js'
import {storeToRefs} from 'pinia'
const store = useCounterStore()
const {getCounter}=storeToRefs(store)
</script>

<style lang="scss" scoped>

</style>