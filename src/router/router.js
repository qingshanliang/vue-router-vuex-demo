import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "../component/home.vue";
import tabOne from "../component/tabOne.vue";
import tabTwo from "../component/tabTwo.vue";
import about from "../component/about.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
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
