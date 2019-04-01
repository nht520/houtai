<template>
    <div id="Home">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
  import storage from "../../storage/storage"
  export default {
      name: "Home",
      components: {

      },
      data(){
          return{
            title:"我是首页"
            }
      },
      methods:{
        //判断用户是否登录
        userLoding () {
          this.user = storage.get("user");
          if(this.user==null || this.user===undefined){
            this.$router.push({path:'/'});
          }else if(this.user!==null || this.user!==undefined){
            this.$router.push({path:'/Home'});
          }
        }
      },
      mounted(){
        this.userLoding()
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
