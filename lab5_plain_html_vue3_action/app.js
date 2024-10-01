const app = Vue.createApp({
    data() {
        return {
            counter1: 30
        }
    },
    methods: {
        increase1() {
            this.counter1++;
        },
        decrease1: function () {
            this.counter1--;
        },
        increase(step) {
            this.counter1 = this.counter1 + step;
        },
        decrease: function (step) {
            this.counter1 = this.counter1 - step;
        }
    }
})
app.mount('#app5')