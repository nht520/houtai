<template>
  <div>
    <!--<router-link  v-for="item in nvaigtion" :to="item.path" :key="item.id"  tag="li">-->
        <!--<span>{{item.title}}</span>-->
        <!--<v-icon>{{item.icon}}</v-icon>-->
    <!--</router-link>-->
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <router-link to="/Home" tag="li">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
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
              <i :class="item.class"></i>
              <span>{{item.title}}</span>
            </template>

            <el-menu-item-group
              v-for="(one,id) in item.list"
              :key="id"
            >
              <router-link :to="one.path" tag="li">
                <el-menu-item index="1-1"  @click="init(one)">
                     <i :class="one.class"></i>
                     {{one.title}}
                </el-menu-item>
              </router-link>

            </el-menu-item-group>

          </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
    export default {
        // name: "Navigation",
        data(){
          return{
            admins: [
              {
                id:"1",
                title:"首页",
                icon:"home",
                class:"el-icon-news",
                list:[
                  {
                    id:"1",
                    title:"列表",
                    path:"/List",
                    class:"el-icon-menu",
                  },
                  {
                    id:"2",
                    title:"详情",
                    path:"/Details",
                    icon:"home",
                    class:"el-icon-tickets",
                  }
                ]
              },
              {
                id:"2",
                title:"提示",
                icon:"home",
                class:"el-icon-location",
                list:[
                  {
                    id:"1",
                    title:"头部",
                    path:"/header",
                    icon:"home",
                    class:"el-icon-location",
                  },
                  {
                    id:"2",
                    title:"提示",
                    path:"/hint",
                    icon:"home",
                    class:"el-icon-location",
                  }
                ]
              },

            ],
          }
        },
        methods: {
          init(one){
            // console.log(one);
            this.$store.commit('navlist',one);
          }
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
</style>
