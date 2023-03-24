import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/css/reset.css'
import './assets/css/style.css'
import VueLazyload from 'vue-lazyload'

const app = createApp(App);

app.use(VueLazyload, {
    preLoad: 1.3,
    error: 'https://dummyimage.com/130x120/ccc/999.png&text=Not+Found',
    loading: 'https://dummyimage.com/130x120/dcdcdc/999.png&text=Now loading',
    attempt: 1
  })

app.use(router).mount('#app');