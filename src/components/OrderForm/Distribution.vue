<template>
    <div id="Distri">
      <Header :header="title"></Header>
      <!--  头部-->
      <div class="list">
      <!--引用表格-->
        <el-table
          :data="list"
          ref="multipleTable"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="selectionRowsChange"
        >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄">
          </el-table-column>
          <el-table-column
            prop="iphone"
            label="电话"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="compile">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deLeate">删除</el-button>
              <el-button
                size="mini"
                type="success"
                @click="examine">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 引用分业-->
        <div id="Navpages">
          <el-row>
            <el-col :span="12" class="left">
                  <el-button @click="toggleSelect(list)" size="mini">全选/反选</el-button>
                  <el-button type="danger" size="mini" @click="chkDelet" >删除</el-button>
              </el-col>
              <el-col :span="12">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                  </el-pagination>
              </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>
<script>
    import Header from "../Header/Header";
    export default {
      name: "Distribution",
      components: {Header},
      data(){
          return{
            title:"订单管理",
            currentPage1: 1,
            currentPage2: 2,
            currentPage3: 3,
            currentPage4: 4,
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
         compile (){
           console.log("编辑")
         },
         deLeate(){
           console.log("删除")
         },
         examine(){
           this.$router.push({path:'/Details'});
           console.log(this.title)
         },
         toggleSelect(rows) {
           console.log(rows);
           if (rows) {
             rows.forEach(row => {
               this.$refs.multipleTable.toggleRowSelection(row);
             });
           } else {
             this.$refs.multipleTable.clearSelection();
           }
         },
         selectionRowsChange(val){
           console.log(val);
         },
         chkDelet(index, rows) { //删除

         },
         handleSizeChange(val) {
           console.log(`每页 ${val} 条`);
         },
         handleCurrentChange(val) {
           console.log(`当前页: ${val}`);
         },

       },
       mounted() {

       }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left
   text-align left
   padding-left  1%
  #Distri
   width 100%
  #Navpages
    text-align right
    padding 1% 1% 1% 0%
    background #FFFFFF

</style>
