const app = Vue.createApp({
    data() {
        return {
            issue: ""
        }
    },
    methods: {
        resetIssue() {
            this.issue = ""
        }
    }
})
app.mount("#app6")