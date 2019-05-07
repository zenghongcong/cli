import Vue from 'vue'
import router from '@/router/index'
import uweb from 'vue-uweb'

Vue.use(uweb, {
	siteId: '1276383173', //绑定要接受API请求的统计代码siteid
	debug: false, //调试模式下将在控制台中输出调用 window._czc.push 时传递的参数
	autoPageview: false, //是否开启自动统计PV
});

router.afterEach((to, from) => {
	let contentUrl = '/#' + to.fullPath,
		refererUrl = '/#' + from.fullPath;
	if (contentUrl !== refererUrl) {
		uweb.trackPageview(contentUrl, refererUrl);
	}
});