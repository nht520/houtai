<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <!--共用导航-->
      <Navigation></Navigation>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <!--头部-->
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>apps</v-icon>
        </v-btn>
        <span class="hidden-sm">NHT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-down">admin欢迎你！</span>
      <v-btn icon>
        <v-icon @click="remover">notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!--内容部分-->
      <v-container fluid fill-height>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Navigation from "./Navigation";
  import storage from "../storage/storage";
  export default {
    components: {
      Navigation
    },
    data: () => ({
      hedtitle:"",
      drawer: true,
    }),
    methods:{
      remover(){
        storage.remove("user");
        this.$router.push({path:'/'});
      }

    },
    mounted(){
      //判断用户是否登录
      this.user = storage.get("user");
      if (this.user === ""){
        this.$router.push({path:'/'})
      } else {
        this.$router.push({path:'/Layout'})
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .v-toolbar
    box-shadow 0 2px 4px -1px rgba(199, 203, 255, 0.2), 0 4px 5px 0 rgba(221, 228, 255, 0.14), 0 1px 10px 0 rgba(206, 207, 255, 0.12)
  .blue.darken-3
    background-color #ffffff!important
    border-color #ffffff!important
  .v-btn .v-btn__content .v-icon
   color  #409EFF
  .hidden-sm-and-down
   color #303133
  .hidden-sm
   color #409EFF
  .v-content
   background #f5f1fc
  .theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border
    background-color: rgba(254, 254, 254, 0.12)
    box-shadow 0 2px 4px -1px rgba(199,203,255,0.2), 0 4px 5px 0 rgba(221,228,255,0.14), 0 1px 10px 0 rgba(206,207,255,0.12);
    -webkit-box-shadow 0 2px 4px -1px rgba(199,203,255,0.2), 0 4px 5px 0 rgba(221,228,255,0.14), 0 1px 10px 0 rgba(206,207,255,0.12);
</style>
