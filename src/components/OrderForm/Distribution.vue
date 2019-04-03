<template>
    <div id="Distri">
      <Header :header="title"></Header>
      <div class="list">
      <!--引用表格-->
        <List :tableData="list" ></List>
        <!-- 引用分业-->
        <Navpages></Navpages>
      </div>
    </div>
</template>

<script>
    import Header from "../Header/Header";
    import List from "../List/List";
    import Navpages from "../Navpges/Navpages";
    export default {
      name: "Distribution",
      components: {Navpages, List, Header},
      data(){
          return{
            title:"订单管理",
            list: [
              {
              date: '2016-05-02',
              name: '王小虎1',
              iphone:'15803614645',
              age:"15",
              address: '上海市普陀区金沙江路 1518 弄'
              },
              {
                date: '2016-05-04',
                name: '王小虎',
                iphone:'15803614645',
                age:"15",
                address: '上海市普陀区金沙江路 1517 弄'
              },
              {
                date: '2016-05-01',
                name: '王小',
                iphone:'15803614645',
                age:"15",
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                date: '2016-05-03',
                name: '王小虎',
                iphone:'15803614645',
                age:"15",
                address: '上海市普陀区金沙江路 1516 弄'
              }],
          }
        },
       methods:{

       },
       mounted() {

       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Distri
   width 100%
</style>
