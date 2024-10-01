const app = Vue.createApp({
    data() {
        return {
            issue: ""
        }
    },
    methods: {
        setIssue(event) {
            this.issue = event.target.value;
        }
    }
})
app.mount("#app6")