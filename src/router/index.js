import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import( '@/components/Layout.vue');
const Home = () => import( '@/components/Home/Home.vue');
const Login = () => import( '@/components/Login.vue');
const Details = () => import( '@/components/Details/Details.vue');
const For = () => import('@/components/NotFound/For.vue');

//订单
const Retail = () => import("@/components/OrderForm/Retail.vue");
const Sendgoods = () => import("@/components/OrderForm/Sendgoods.vue");
const Completed = () => import("@/components/OrderForm/Completed.vue");
const Allorder = () => import("@/components/OrderForm/Allorder.vue");

//用户
const UserList = () => import("@/components/UserName/UserList.vue");
const UserOrder = () => import("@/components/UserName/UserOrder.vue");
//商城套餐
const Setmeal = () => import("@/components/Setmeal/Setmeal.vue");
//地址邮费
const Site = () => import("@/components/Site/Site.vue");
const Address = () => import("@/components/Site/Address.vue");
const Postage =() => import("@/components/Site/Postage.vue");
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
          path:"/UserList",
          name:"UserList",
          component:UserList
        },
        {
          path:"/UserOrder",
          name:"UserOrder",
          component:UserOrder
        },
        {
          path:'/Retail',
          name:'Retail',
          component:Retail
        },
        {
          path:'/Sendgoods',
          name:'Sendgoods',
          component:Sendgoods
        },
        {
          path:'/Completed',
          name:'Completed',
          component:Completed
        },
        {
          path:'/Allorder',
          name:'Allorder',
          component:Allorder
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
        {
          path:'/Postage',
          name:'Postage',
          component:Postage
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
