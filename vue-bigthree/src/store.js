import Vue from 'vue';
import Vuex from 'vuex';
import docs from './docs.js';
import template from './template.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        docs,
        template,
    }
})