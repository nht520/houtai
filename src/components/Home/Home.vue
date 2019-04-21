<template>
    <div id="Home">
      <el-row>
        <el-col :span="24">
          <ve-line :data="chartData"></ve-line>
        </el-col>
      </el-row>
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
            title:"我是首页",
            chartData: {
              columns: ['日期', '访问用户', '下单用户', '下单率'],
              rows: [
                { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
              ]
            }
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
        },
      },
      mounted(){
        this.userLoding()
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   #Home
    width 100%
    padding 3%
    background #FFFFFF
</style>
