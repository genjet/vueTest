const app = Vue.createApp({
    data() {
        return {
            counter1: 30,
            todo: '',
            urgent: "",
            checkedUrgent: ''
        }
    },
    methods: {
        commitUrgent() {
            this.checkedUrgent = this.urgent;
        },
        setUrgent(event) {
            this.urgent = event.target.value;
        },
        submitForm() {
            alert('送送送,送出request畫面會閃一下喔');
        },
        submitForm1(event) {
            event.preventDefault()
            alert('接了 event.preventDefault() 就不送了');
        },
        submitForm2(event) {
            alert(`因為 v-on:submit.prevent 不會送, form submitted as:${event.target}`)
        },
        setTodo(event, greeting) { // assume target是一個input元件 
            this.todo = `${greeting}  : ${event.target.value}`;
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