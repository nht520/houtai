import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import( '@/components/Layout.vue');
const Home = () => import( '@/components/Home/Home.vue');
const Login = () => import( '@/components/Login.vue');
const Details = () => import( '@/components/Details/Details.vue');
const For = () => import('@/components/NotFound/For.vue');

//订单
const Distribution = () => import("@/components/OrderForm/Distribution.vue");
const Mine = () => import("@/components/OrderForm/Mine.vue");
const Retail = () => import("@/components/OrderForm/Retail.vue");
//用户
const UserList = () => import("@/components/UserName/UserList.vue");
//商城套餐
const Setmeal = () => import("@/components/Setmeal/Setmeal.vue");
//
const Site = () => import("@/components/Site/Site.vue");
const Address = () => import("@/components/Site/Address.vue");

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
          path:"/Setmeal",
          name:"Setmeal",
          component:Setmeal
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
          path:"/UserList",
          name:"UserList",
          component:UserList
        },
        {
          path:'/Retail',
          name:'Retail',
          component:Retail
        },
        {
          path:'/Details',
          name:'Details',
          component:Details
        },
        {
          path:'/Site',
          name:'Site',
          component:Site
        },
        {
          path:'/Address',
          name:'Address',
          component:Address
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
