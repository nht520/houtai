import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import( '@/components/Layout.vue');
const Login = () => import( '@/components/Login.vue');
const List = () => import( '@/components/List/List.vue');
const Details = () => import( '@/components/Details/Details.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/List',
      children:[
        {
          path: '/List',
          name: 'List',
          component: List,
        },
        {
          path:'/Details',
          name:'Details',
          component:Details,
        }
      ]
    },
  ]
})
