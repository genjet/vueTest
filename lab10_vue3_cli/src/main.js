import { createApp } from 'vue'
import App from './App.vue'
import CourseIntro from './components/CourseIntro.vue'
import mitt from 'mitt'
const emitter = mitt();
const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.component('course-intro', CourseIntro)
app.mount('#app')
