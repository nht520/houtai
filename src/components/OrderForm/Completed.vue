<template>
  <div id="Completed">
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
        <!--        <el-table-column-->
        <!--          type="selection"-->
        <!--          width="55">-->
        <!--        </el-table-column>-->
        <el-table-column width="260px"
                         label="商品">
          <template slot-scope="scope">
            <h2 style="margin-left: 10px">{{ scope.row.orderGoods.goodsEntity.goodsName }}</h2>
            <h2 style="margin-left: 10px">下单时间: {{ scope.row.orderTime }}</h2>
            <span style="margin-left: 10px; color:#F00;">订单编号: {{ scope.row.orderNo }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="买家"
        >
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.memberEntity.memberName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="电话"
        >
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.memberEntity.memberPhone }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="orderGoods.addNumber"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="orderPrice"
          label="价格">
        </el-table-column>
        <el-table-column
          label="状态"
        >
          <template slot-scope="scope">
            <span style="margin-left: 10px">已完成</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--            <el-button-->
            <!--              size="mini"-->
            <!--              @click="compile">编辑</el-button>-->
            <el-button
              size="mini"
              type="danger"
              @click="deleteRow">删除</el-button>
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
          <!-- 分业-->
          <el-col :span="12" :offset="12">
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
    name: "Sendgoods",
    components: {Header},
    data(){
      return{
        title:"订单管理",
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
      examine(){
        this.$router.push({path:'/Details'});
        console.log(this.title)
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
      deleteRow(index, rows) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
        const api = window.g.indent;
        // const api = "https://api.9knx.com/api/member?current="+this.present+"&size="+this.number;
        const date={
          params:{
            current:this.present,
            size:this.number,
            orderStatus:1,
          }
        };
        var _this = this;
        Axios.get(api,date).then((res)=>{
          console.log(res);
          var data = res.data.records;
          var sj = {};
          for(let i =0;i<data.length;i++){
            sj['id'] = data[i].id;
            sj['goodsEntity'] = data[i].deliverAddress;
            sj['deliverFreight'] = data[i].deliverFreight;
            sj['deliverName'] = data[i].deliverName;
            sj['deliverPhone'] = data[i].deliverPhone;
            sj['distributorId'] = data[i].distributorId;
            sj['memberEntity'] = data[i].memberEntity;
            sj['orderNo'] = data[i].orderNo;
            sj['orderPrice'] = data[i].orderPrice;
            sj['orderStatus'] = data[i].orderStatus;
            sj['orderTime'] = data[i].orderTime;
            sj['orderGoods'] = JSON.parse(data[i].orderGoods)[0];
            _this.list.push(sj);
          }
          console.log(_this.list);
          // var obj=JSON.parse(res.data.records.orderGoods);
          // console.log(obj);
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
  #Completed
    width 100%
  #Navpages
    text-align right
    padding 1% 1% 1% 0%
    background #FFFFFF
</style>
