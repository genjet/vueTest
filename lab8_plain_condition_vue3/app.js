const app = Vue.createApp({
    data() {
        return {
            courseContent: "",
            courses: ["POP"]
        }
    },
    methods: {
        clearCourses() {
            this.courses.length = 0
        },
        addCourses() {
            this.courses.push(this.courseContent);
            this.courseContent = "";
        },
        removeCourse(index) {
            this.courses.splice(index, 1)
        }
    },
    computed: {
    },
    watch: {

    }
})
app.mount("#app8")