import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

const newDom=()=>{
    const div=document.createElement('div');
    document.body.appendChild(div);
    return div;
};
const init=()=>{
    const root=newDom();
    window.vm = new Vue({
        router,
        store,
        render: createElement => createElement(App)
    }).$mount(root);
};
init();
