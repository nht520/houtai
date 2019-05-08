<template>
  <div id="Postage">
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
          label="名称"
          prop="provine"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="计费方式"
        >
        </el-table-column>
        <el-table-column
          prop="county"
          label="首重(首件)价格">
        </el-table-column>
        <el-table-column
          prop="price"
          label="续重(续件)价格">
        </el-table-column>
        <el-table-column label="启用">
            <v-switch
              v-model="start"
              color="blue"
              value="id"
              hide-details
            ></v-switch>
        </el-table-column>
        <el-table-column label="默认">
            <v-switch
              v-model="rdioewitch"
              color="red"
              value="id"
              hide-details
            ></v-switch>
        </el-table-column>
        <el-table-column label="操作">
          <template slot="header" slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="Address">添加地址邮费</el-button>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="compile(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteRow(scope.$index,  scope.row)">删除</el-button>
<!--            <el-button-->
<!--              size="mini"-->
<!--              type="success"-->
<!--              @click="examine">查看</el-button>-->
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
  import storage from "../../storage/storage";
  export default {
    name: "Postage",
    components: {Header},
    data(){
      return{
        title:"配送方式",
        current: 1,
        list: [],
        total:0,
        size:0,
        present:1,
        number:"10",
        start:"",
        rdioewitch:""
      }
    },
    methods:{
      //添加
      Address(){
        this.$router.push({path:'/Address'});
      },
      //编辑
      compile(index, row) {
        console.log(row);
        storage.set("rowList",row);
        // this.$router.push({path:'/Address'});
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
      deleteRow(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const api = window.g.delupdate;
          const parnm = new URLSearchParams();
                parnm.append("isdelete","1");
                parnm.append("id",row.id);
          Axios.post(api,parnm).then((res)=>{
            this.distList();
            console.log(res);
          }).catch((err)=>{
            console.log(err)
          });
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
      //获取数据
      distList(){
        const api = window.g.findCost;
        // const api = "https://api.9knx.com/api/member?current="+this.present+"&size="+this.number;
        let param = {
            params:{
              isdelete:0
            }
        };
        Axios.get(api,param).then((res)=>{
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

    },
    activated(){
      this.distList();
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left
    text-align left
    padding-left  1%
  #Postage
    width 100%
  #Navpages
    text-align right
    padding 1% 1% 1% 0%
    background #FFFFFF
</style>
