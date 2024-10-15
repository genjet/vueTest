<template>
    <div>
        <h1>get data from firebase</h1>
        <button @click="send1">send data using built-in fetch</button>
        <br>
        <button @click="send2">post using axios</button>
    </div>
</template>

<script>
const URL1 = "https://vuetest202410-default-rtdb.firebaseio.com/lab15/course.json"
const URL2 = "https://vuetest202410-default-rtdb.firebaseio.com/lab15/instructors.json"
import axios from 'axios';
export default {
    data() {
        return {
            course: { id: "POOP", name: "Python OOP", duration: 35 },
            instructor:{name:"Ken",grade:"senior"},
            courses: []
        }
    },
    methods: {
        send1() {
            fetch(URL1, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.course)
            })
                .then(response => {
                    console.log("response is:", response)
                    if (response.ok) {
                        const data = response.json();
                        console.log("response json:", data)
                        return data
                    }
                })
                .then(data => {
                    console.log("最後取得的結果:", data)
                })
        },
        send2() {
            axios.post(URL2, this.instructor).then(
                response => {
                    console.log("response=", response)
                    if (response.status == 200) {
                        return response.data
                    }
                }
            ).then(data => {
                console.log("axios取得的結果是", data)
            })

        }   
    }
}
</script>

<style lang="scss" scoped></style>