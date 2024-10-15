<template>
    <div>
        <h1>this is counter1</h1>
        <button @click="incrementCount">counter={{ getCounter }}</button>
    </div>
</template>

<script>
import {useCounterStore} from '../store/counter.js'
import {storeToRefs} from 'pinia'
export default {
    setup () {
        const store = useCounterStore()
        const {getCounter}=storeToRefs(store)
        const {incrementCount} = store
        return {getCounter, incrementCount}
    }
}
</script>

<style lang="scss" scoped>

</style>