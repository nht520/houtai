<template>
  <div>
    <!--<router-link  v-for="item in nvaigtion" :to="item.path" :key="item.id"  tag="li">-->
        <!--<span>{{item.title}}</span>-->
        <!--<v-icon>{{item.icon}}</v-icon>-->
    <!--</router-link>-->
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>首页</span>
              </template>
              <el-menu-item-group>
                <router-link
                  v-for="(item,key) in nvaigtion"
                  :to="item.path"
                  :key="item.id"
                  tag="li" >
                  <el-menu-item index="1-1" @click="change(key)">
                    <span>{{item.title}}</span>
                    <!--<i class="el-icon-location"></i>-->
                  </el-menu-item>
                </router-link>
              </el-menu-item-group>

              <el-submenu index="1-4">

                  <template slot="title"><i class="el-icon-location"></i>选项4</template>
                  <router-link  v-for="(item,key) in nvaigti" :to="item.path"  :key="item.id"  tag="li">
                    <el-menu-item index="1-1">
                      <span>{{item.title}}</span>
                    </el-menu-item>
                  </router-link>
                </el-submenu>
              </el-submenu>

              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
  </div>
</template>
<script>
    export default {
        name: "Navigation",
        data(){
          return{
            nvaigtion:[
              {
                id:0,
                path:'/Home',
                title:"HOME",
              },
              {
                id:1,
                path:'/List',
                title:"商品",
              },
              {
                id:2,
                path:'/Details',
                title:"详情",
              },
            ],
            nvaigti:[
              {
                id:0,
                path:'/Home',
                title:"首页1",
              },
              {
                id:1,
                path:'/List',
                title:"商品",
              },
              {
                id:2,
                path:'/Details',
                title:"详情",
              },
            ],
          }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          change(key){
            console.log(key)
          }

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
</style>
