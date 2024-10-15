import {defineStore} from 'pinia'
import {computed, ref} from 'vue'

export const useCounterStore = defineStore('CounterStore',()=>{
    const counter = ref(0)
    const getCounter = computed(()=>counter.value)
    function incrementCount() {
        counter.value++
    }
    return {getCounter, incrementCount}
})