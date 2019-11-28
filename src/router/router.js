import Vue from "vue";
import VueRouter from "vue-router";
import home from "../component/home.vue";
import tabOne from "../component/tabOne.vue";
import tabTwo from "../component/tabTwo.vue";
import about from "../component/about.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component:home
    },
    {
        path:"/home",
        component: home
    },
    {
        path: "/tabOne",
        component: tabOne
    },
    {
        path: "/tabTwo",
        component: tabTwo
    },
    {
        path: "/about",
        component: about
    }
]

var router =  new VueRouter({
    routes
});
export default router;
