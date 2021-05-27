import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import {createWebHistory,createRouter}  from 'vue-router'

const history =createWebHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path: '/Doc' ,component:Doc},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
