import Home from "@/components/Home.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Records from "@/components/Records.vue";
import CRUD from "@/components/CRUD.vue";
import Edit from "@/components/Edit.vue";
import Create from "@/components/Create.vue";
import ErrorRoute from "@/components/ErrorRoute.vue"


const routes = [
    { path: '/', component:Home},
    { path: '/home', component:Home},
    { path: '/records', component: Records},
    { path: '/crud', component: CRUD},
    { path: '/edit/:id', component: Edit},
    { path: '/create', component:Create},


    { path: '/:pathMatch(.*)*', component: ErrorRoute},

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

