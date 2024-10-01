const app = Vue.createApp({
    data() {
        return {
            counter1: 30,
            todo:''
        }
    },
    methods: {
        setTodo(event) { // assume target是一個input元件 
            this.todo = event.target.value;
        },
        increase1() {
            this.counter1++;
        },
        decrease1: function () {
            this.counter1--;
        },
        increase(step) {
            setTimeout(() => {
                this.counter1 = this.counter1 + step;
            }, 1000);
        },
        decrease: function (step) {
            this.counter1 = this.counter1 - step;
        }
    }
})
app.mount('#app5')