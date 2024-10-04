const app = Vue.createApp({
    data() {
        return {
            issue: "",
            counter: 0
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
        formatIssue() {
            console.log("[format]格式化issue")
            if (this.issue === "") {
                return "";
            }
            return `[!!]${this.issue}`
        },
        formatIssue_p() {
            return function (param) {
                console.log("[format]格式化issue:" + param)
                if (this.issue === "") {
                    return "";
                }
                return `[!!]${this.issue}`
            }
        }
    }
})
app.mount("#app6")