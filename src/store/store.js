import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);


const store = new Vuex.Store({
    namespaced: true,
    state: {
        tabOne: 'I am tabOne in vuex',
        tabTwo: 'I am tabTwo in vuex'
    },
    mutations: mutations,
    actions: actions,
});

window.VueStore = store;

export default store;
