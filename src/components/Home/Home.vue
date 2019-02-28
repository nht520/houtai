<template>
    <div id="Home">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!--table-->
      <div>
        <h1>111111111</h1>
      </div>
    </div>
</template>

<script>
  export default {
        name: "Home",
        data(){
          return{
            title:""
          }
        },
        methods:{

        },
        mounted(){
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
