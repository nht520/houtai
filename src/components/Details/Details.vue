<template>
  <div id="Dtetails">
    <Header></Header>
    <h1>我是详情</h1>
  </div>
</template>

<script>
  import Header from "../Header/Header";
  export default {
    name: "Details",
    components: {Header},
    data(){
      return{
        title:""
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

<style scoped>

</style>
