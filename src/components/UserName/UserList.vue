<template>
  <div id="UserList">
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
          prop="id"
          label="编号">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="realname"
        >
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
<!--            <el-button-->
<!--              size="mini"-->
<!--              @click="compile">编辑</el-button>-->
            <el-button
              size="mini"
              type="danger"
              @click="deleteRow(scope.$index, scope.row)">删除</el-button>
            <el-button
              size="mini"
              type="success"
              @click="examine(scope.row)">查看订单</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 引用分业-->
      <div id="Navpages">
        <el-row>
          <el-col :span="12" class="left">
            <el-button @click="toggleSelect(list)" size="mini">全选/反选</el-button>
            <el-button type="danger" size="mini" @click="qxDete" >删除</el-button>
          </el-col>
          <!-- 分业-->
          <el-col :span="12">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="current"
              :page-sizes="[10, 20]"
              :page-size=size
              layout="total, sizes, prev, pager, next, jumper"
              :total=total>
            </el-pagination>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from "../Header/Header";
  import Axios from "axios";
  export default {
    name: "UserList",
    components: {Header},
    data(){
      return{
        title:"用户管理",
        current: 1,
        list: [],
        total:0,
        size:0,
        present:1,
        number:"10",
      }
    },
    methods:{
      //编辑
      compile (){
        console.log("编辑")
      },
      //查看详情
      examine(row){
        // console.log(row);
        // this.$router.push({path:'/Sendgoods'});
        this.$router.push({
          path:"/UserOrder",//跳转路由
          query:{//参数对象
            id:row.id
          }
        });
      },
      //全选
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
      //获取全选的key
      selectionRowsChange(val){
        console.log(val);
      },
      //删除当前一行
      deleteRow(index, row) {
        console.log(row);
      },
      //删除选中数据
      qxDete(){
        console.log("删除选中数据");
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.number=val;
        this.distList();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.present=val;
        this.distList();
      },
      distList(){
        const api = window.g.hopMember;
        // const api = "https://api.9knx.com/api/member?current="+this.present+"&size="+this.number;
        const date={
              params:{
                current:this.present,
                size:this.number,
              }
        };
        Axios.get(api,date).then((res)=>{
          console.log(res);
          this.list=res.data.records;
          this.total=res.data.total;
          this.size=res.data.size;
          this.pages=res.data.pages;
          this.current=res.data.current;
        },(err)=>{
          console.log(err)
        })
      }
    },
    mounted() {
      this.distList();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left
    text-align left
    padding-left  1%
  #UserList
    width 100%
  #Navpages
    text-align right
    padding 1% 1% 1% 0%
    background #FFFFFF
</style>
