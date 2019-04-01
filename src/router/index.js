import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import( '@/components/Layout.vue');
const Home = () => import( '@/components/Home/Home.vue');
const Login = () => import( '@/components/Login.vue');
const List = () => import( '@/components/List/List.vue');
const Details = () => import( '@/components/Details/Details.vue');
const For = () => import('@/components/NotFound/For.vue');

//订单
const Distribution = () => import("@/components/OrderForm/Distribution.vue");
const Mine = () => import("@/components/OrderForm/Mine.vue");
const Retail = () => import("@/components/OrderForm/Retail.vue");

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      redirect:'/Home',
      children:[
        {
          path:'/Home',
          name:'Home',
          component:Home
        },
        {
          path:'/Distribution',
          name:'Distribution',
          component:Distribution
        },
        {
          path:'/Mine',
          name:'Mine',
          component:Mine
        },
        {
          path:'/Retail',
          name:'Retail',
          component:Retail
        },
        {
          path: '/List',
          name: 'List',
          component: List
        },
        {
          path:'/Details',
          name:'Details',
          component:Details
        },
      ]
    },
    {
      path: '*',
      name: 'For',
      component: For,
    },
  ],
})
