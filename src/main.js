// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vuetify
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
Vue.use(Vuetify);
//elemt-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//验证
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
//引入状态管理
import Vuex from 'vuex';
import store from "./store/store";
Vue.use(Vuex) ;
//引用strage,configreact
import storage from "./storage/storage";
import config from "../static/config"
//引用全局css
import react from "../static/css/reset.css"
//404页面
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


//全局守卫，记录登录状态
router.beforeEach((to, from, next) => {
  //store的getters中定义获取用户信息的函数  getUser
  //user为空说明用户未登录则不跳转
  this.user = storage.get("user");
  let isLogin = this.user;
  console.log(isLogin);
  if (!isLogin) {//未登录
    if (to.path !== '/') {//跳转到登录页
      return next({path: '/'});
    }else {
      next();
    }
  }else {//已登录
    if (to.path === 'Layout') {//跳转到首页
      return next({path: 'Layout'});
    }
    next();
  }

});



