<template>
  <div id="Header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
    export default {
        name: "Header",
        data(){
          return{
            title:""
          }
        },
        methods:{

        },
        mounted(){
          this.title=this.$store.state.title.title;
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
