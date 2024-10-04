const app = Vue.createApp({
    data() {
        return {
            courses: [
                { id: "POOP", name: "Python OOP", duration: "35hr" },
                { id: "BDPY", name: "Python and big data", duration: "35hr" }
            ],
            detailsVisible: true
        }
    },
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible;
        }
    },
    computed: {
    },
    watch: {
    }
})
app.mount("#app9")