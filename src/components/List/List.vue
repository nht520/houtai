<template>
    <div id="List">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="日期"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="年龄"
        >
        </el-table-column>
        <el-table-column
          prop="iphone"
          label="电话"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
