<template>
  <div id="UserOrder">
    <Header :header="title"></Header>
    <!--  头部-->
    <div class="list">
      <!--引用表格-->
      <el-table
        :data="list"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
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
          label="状态">
          <template slot-scope="scope">
            <span style="margin-left: 10px">待发货</span>
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
    name: "UserOrder",
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
        form: {
          orderName: '',
          orderRegion: '',
        },
        dialogVisible: false
      }
    },
    methods:{
      // 发货
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
        const date={
          params:{
            id:this.orderID,
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
      this.orderID=this.$route.query.id;
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left
    text-align left
    padding-left  1%
  #UserOrder
    width 100%
  #Navpages
    text-align right
    padding 1% 1% 1% 0%
    background #FFFFFF
</style>
