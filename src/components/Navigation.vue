<template>
  <div id="Navigation">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <router-link to="/Home" tag="li">
          <el-menu-item index="1">
            <v-icon>layers</v-icon>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>

    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        v-for="(item,id) in admins" :key="id"
       >
          <el-submenu index="1" >
            <template slot="title">
              <v-icon>{{item.icon}}</v-icon>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group
              v-for="(v,id) in item.list"
              :key="id"
            >
              <router-link :to="v.path" tag="li">
                <el-menu-item index="1-1"  @click="init(v)">
                     <v-icon >{{v.icon}}</v-icon>
                     {{v.title}}
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
      </el-menu>
    </el-col>

  </div>
</template>
<script>
   import storage from "../storage/storage"
    export default {
        // name: "Navigation",
        data(){
          return{
            admins: [
              {
                id:"1",
                title:"商品管理",
                icon:"loyalty",
                class:"loyalty",
                list:[
                  {
                    id:"1",
                    title:"分销套组",
                    path:"/Setmeal",
                    icon:"people",
                    class:"loyalty",
                  },
                ]
              },
              {
                id:"1",
                title:"订单管理",
                icon:"loyalty",
                class:"loyalty",
                list:[
                  {
                    id:"1",
                    title:"分销订单",
                    path:"/Distribution",
                    icon:"people",
                    class:"loyalty",
                  },
                  {
                    id:"2",
                    title:"套餐订单",
                    path:"/Mine",
                    icon:"sd_card",
                    class:"el-icon-tickets",
                  }
                ]
              },
              {
                id:"2",
                title:"用户管理",
                icon:"person_pin",
                class:"fa-user-ninja",
                list:[
                  {
                    id:"1",
                    title:"用户列表",
                    path:"/UserList",
                    icon:"bubble_chart",
                    class:"fa-user-ninja",
                  },
                  {
                    id:"2",
                    title:"提示",
                    path:"/hint",
                    class:"el-icon-location",
                  }
                ]
              },
            ],
          }
        },
        methods: {
          init(v){
            // this.$store.commit('navlist',v);
            storage.set("navlist",v);
            console.log(v);
          },
        },
        mounted(){

        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .el-menu
   border none
  .el-menu-item.is-active
   color #303133
  .router-link-active
   background #ecf5ff
  .router-link-exact-active
     & .el-menu-item
        color #409eff
       & i
          color #409eff !important
</style>
