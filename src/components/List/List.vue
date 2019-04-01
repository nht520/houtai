<template>
    <div id="List">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          label="Date"
          prop="date">
        </el-table-column>
        <el-table-column
          label="Name"
          prop="name">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    import Header from "../Header/Header";
    import Navpages from "../Navpges/Navpages";
    export default {
        name: "List",
        components: {

        },
        props: {
          tableData:{
            // type:String,
            // default:[],
          },
        },
        data(){
          return{
            // list:[
            //   {
            //     id:1,
            //     label:"编号",
            //     prop:"name"
            //   },
            //   {
            //     id:2,
            //     label:"电话",
            //     prop:"iphone"
            //   },
            //   {
            //     id:3,
            //     label:"地址",
            //     prop:"address"
            //   },
            //   {
            //     id:4,
            //     label:"时间",
            //     prop:"data"
            //   },
            //
            // ],
            // tableData: [{
            //   date: '2016-05-02',
            //   name: '王小虎1',
            //   iphone:'15803614645',
            //   address: '上海市普陀区金沙江路 1518 弄'
            // },
            //   {
            //   date: '2016-05-04',
            //   name: '王小虎',
            //   iphone:'15803614645',
            //   address: '上海市普陀区金沙江路 1517 弄'
            // },
            //   {
            //   date: '2016-05-01',
            //   name: '王小',
            //   iphone:'15803614645',
            //   address: '上海市普陀区金沙江路 1519 弄'
            // },
            //   {
            //   date: '2016-05-03',
            //   name: '王小虎',
            //   iphone:'15803614645',
            //   address: '上海市普陀区金沙江路 1516 弄'
            // }],
            search: ''
          }
        },
       methods:{

       },
       mounted(){

       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #List
   width 100%

</style>
