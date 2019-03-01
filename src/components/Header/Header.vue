<template>
  <div id="Header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item >
        <span @click="gohome()">首页</span>
      </el-breadcrumb-item>
        <el-breadcrumb-item>
            {{title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
    export default {
        name: "Header",
        data(){
          return{
            title:"",
          }
        },
        methods:{
            gohome(){
              this.$router.go(-1);
            }
        },
        mounted(){
          this.title=this.$store.state.title.title;
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-breadcrumb__inner:hover
   color #409eff
   cursor pointer
</style>
