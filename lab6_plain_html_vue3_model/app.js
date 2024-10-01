const app = Vue.createApp({
    data() {
        return {
            issue: ""
        }
    },
    methods: {
        setIssue(event) {
            this.issue = event.target.value;
        },
        resetIssue() {
            this.issue = ""
        }
    }
})
app.mount("#app6")