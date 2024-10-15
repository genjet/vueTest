<template>
    <div>
        <h1>get data from firebase</h1>
        <button @click="send1">send data using built-in fetch</button>
    </div>
</template>

<script>
const URL1 = "https://vuetest202410-default-rtdb.firebaseio.com/lab15/course.json"
export default {
    data() {
        return {
            course: { id: "POOP", name: "Python OOP", duration: 35 },
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
        }
    }
}
</script>

<style lang="scss" scoped></style>