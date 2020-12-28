import Vue from 'vue'
import Vuex from 'vuex';
import App from '@/App'
import router from '@/router'
import { RouterMount } from 'uni-simple-router'
import store from '@/store';
import config from '@/config'
import 'lib-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'animate.css/animate.min.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false
Vue.prototype.$config = config

App.mpType = 'app'

const app = new Vue({
	...App,
	router,
	store
})

RouterMount(app,'#app');
