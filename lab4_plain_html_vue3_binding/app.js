const app = Vue.createApp({
    data: function () {
        return {
            primaryGoal1: "Have a happy life!",
            primaryGoal2: "Have a health body!",
            primaryGoal3: "Have a strong mind!",
            primaryGoal4: this.testMag(),
            showHtmlTag: "我要<strong>錢</strong>",
            planLink: "https://trello.com/"
        }
    },
    methods: {
        outputMessage: function () {
            const number1 = Math.random();
            if (number1 < 0.3) {
                return this.primaryGoal1
            } else if (number1 < 0.6) {
                return this.primaryGoal2
            } else {
                return this.primaryGoal4
            }
        },
        testMag: function () {
            return "中樂透頭獎"
        }
    }
})
app.mount("#my-planner")