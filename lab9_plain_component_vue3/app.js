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
app.component("course-content", {
    template: `
        <li>
            <h2>{{course.id}}</h2>
            <button @click="toggleCourseDetail">show detail1</button>
            <ul v-if="detailsVisible">
                <li>{{course.name}}</li>
                <li>{{course.duration}}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            course: { id: "POOP1", name: "Python OOP1", duration: "351hr" },
            detailsVisible: true
        }
    },
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible;
        }
    },
})
app.mount("#app9")