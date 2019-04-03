<template>
  <div id="Dtetails">
    <HeaderOne :header="title"></HeaderOne>
<!--  详情-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1>我是详情</h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from "../Header/Header";
  import HeaderOne from "../Header/HeaderOne";
  export default {
    name: "Details",
    components: {HeaderOne, Header},
    data(){
      return{
        title:"详情"
      }
    },
    mounted(){
      // this.title=this.$store.state.title.title;
      // this.title = this.$route.path.replace("/","");
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Dtetails
   width 100%
</style>
