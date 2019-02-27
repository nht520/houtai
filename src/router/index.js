import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import( '@/components/Layout.vue');
const Login = () => import( '@/components/Login.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
  ]
})
