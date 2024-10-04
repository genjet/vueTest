const app = Vue.createApp({
    data() {
        return {
            issue: "",
            counter: 0,
            formatIssue: "",
            issue2: "hello",
            issue3: "world"
        }
    },
    methods: {
        resetIssue() {
            this.issue = ""
        },
        increase() {
            this.counter += 1;
        }
    },
    computed: {
        // formatIssue() {
        //     console.log("[format]格式化issue")
        //     if (this.issue === "") {
        //         return "";
        //     }
        //     return `[!!]${this.issue}`
        // }
        // ,
        // formatIssue_p() {
        //     return function (param) {
        //         console.log("[format]格式化issue:" + param)
        //         if (this.issue === "") {
        //             return "";
        //         }
        //         return `[!!]${this.issue}`
        //     }
        // }
    },
    watch: {
        issue(value, oldValue) {
            console.log(`從[${oldValue}]改變成[${value}]`)
            this.formatIssue = `[!!]從[${oldValue}]改變成[${value}]`
        },
        counter(value) {
            console.log("counter watch!")
            if (value > 10) {
                this.counter = 0;
                console.log("counter reset!")
            }
        }
    }
})
app.mount("#app6")