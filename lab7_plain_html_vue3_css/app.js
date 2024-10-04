const app = Vue.createApp({
    data() {
        return {
            div1Selected: false,
            div2Selected: false,
            div3Selected: false          
        }
    },
    methods: {
        divSelected(divId){
            if(1 === divId){
                this.div1Selected = !this.div1Selected;
            }else if(2 === divId){
                this.div2Selected = !this.div2Selected;
            }else if(3 === divId){
                this.div3Selected = !this.div3Selected;
            }
        }
    },
    computed: {
        div1Classes(){
         return {is1Selected: this.div1Selected}
        },
        div2Classes(){
         return {is2Selected: this.div2Selected}
        },
        div3Classes(){
         return {is3Selected: this.div3Selected}
        }
    },
    watch: {
       
    }
})
app.mount("#app7")