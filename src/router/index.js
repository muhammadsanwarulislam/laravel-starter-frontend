import {createWebHistory, createRouter} from "vue-router";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard'
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
