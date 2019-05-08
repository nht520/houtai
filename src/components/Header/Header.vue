<template>
  <div id="Header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item >
        <span @click="gohome()">{{header}}</span>
      </el-breadcrumb-item>
        <el-breadcrumb-item>
            {{title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
    import storage from "../../storage/storage"
    export default {
      name: "Header",
      props: ['header'], // 直接简写方式，不指定类型
      data(){
          return{
            title:"",
            text:"",
          }
        },
        methods:{
            gohome(){
              // this.$router.go(-1);
            }
        },
        mounted(){
          // this.title=this.$store.state.title.title;
          //判断是否有
          this.hadnav = storage.get("navlist");
          this.title=this.hadnav.title;
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .el-breadcrumb__inner:hover
   color #409eff
   cursor pointer
  #Header
    background-color #ffffff
    padding 1% 1%
    border-bottom 1px solid #ebeef5
</style>
