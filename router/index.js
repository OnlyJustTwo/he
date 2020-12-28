import Vue from 'vue'
import Router from 'uni-simple-router'
import { LoadingBar } from 'view-design';
import {
	setTitle
} from '@/libs/util'
import routes from './routers'
import store from '@/store'
Vue.use(Router);

const router = new Router({
	h5: {
		vueRouterDev: true
	},
	routes
});


//全局路由前置守卫
router.beforeEach((to, from, next) => {
	LoadingBar.start()
	next() // 跳转
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	setTitle(to, router.app)
	LoadingBar.finish()
	window.scrollTo(0, 0)
})
export default router;
