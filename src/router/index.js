import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import Login from "@/views/Login"
import store from "@/store"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !store.getters["user/getAuthToken"]) next({ name: 'Login' })
    else if(to.name === 'Login' && store.getters["user/getAuthToken"]) next({ name: 'Home' })
    else next()
})

export default router