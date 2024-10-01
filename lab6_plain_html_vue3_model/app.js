const app = Vue.createApp({
    data() {
        return {
            issue: "",
            counter: 0
        }
    },
    methods: {
        outputIssue() {
            console.log("格式化issue")
            if (this.issue==="") {
                return "";
            }
            return `[!!]${this.issue}`
        },
        resetIssue() {
            this.issue = ""
        },
        increase() {
            this.counter += 1;
        }
    }
})
app.mount("#app6")