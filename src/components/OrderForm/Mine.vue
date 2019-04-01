<template>
  <div id="mine">
    <Header :header="title"></Header>
  </div>
</template>

<script>
  import Header from "../Header/Header";
  export default {
    name: "Distribution",
    components: {Header},
    data(){
      return{
        title:"订单管理"
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #mine
   width 100%
</style>
