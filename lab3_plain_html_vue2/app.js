var vue = new Vue({
    el: "#myapp2",
    data() {
        return {
            plans: [],
            value: '',
            workday: ['Mon', 'Tue', 'Thu', 'Fri'],
            nojs: { 'id': 'NodeJS', 'name': "NodeJS實戰...." }
        }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = ""
        }
    }
})