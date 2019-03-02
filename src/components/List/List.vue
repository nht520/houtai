<template>
    <div id="List">
      <Header></Header>
      <!---->
      <el-table style="width: 100%" :data="tableData">

        <el-table-column
          label="时间"
          prop="date"
        >
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="name">
        </el-table-column>
        <el-table-column
          prop="iphone"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
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
      <!--引用分业组件-->
      <Navpages></Navpages>
    </div>
</template>

<script>
    import Header from "../Header/Header";
    import Navpages from "../Navpges/Navpages";
    export default {
        name: "List",
        components: {Navpages, Header},
        data(){
          return{
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              iphone:'15803614645',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              iphone:'15803614645',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小',
              iphone:'15803614645',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              iphone:'15803614645',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
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
