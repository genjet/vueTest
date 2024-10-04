import { createApp } from 'vue'
import App from './App.vue'
import CourseIntro from './components/CourseIntro.vue'

const app = createApp(App)
app.component('course-info', CourseIntro)
app.mount('#app')
