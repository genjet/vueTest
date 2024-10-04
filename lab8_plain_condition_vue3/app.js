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
        addCourses(){
            this.courses.push(this.courseContent);
            this.courseContent = "";
        }
    },
    computed: {
    },
    watch: {

    }
})
app.mount("#app8")