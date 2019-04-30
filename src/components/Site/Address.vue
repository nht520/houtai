<template>
  <div id="Address">
    <HeaderOne :header="title"></HeaderOne>
    <!--  详情-->
    <el-row>
      <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="4">
            <label>请选择省：</label>
          </el-col>
          <el-col :span="8">
            <el-select v-model="province" placeholder="请选择">
              <el-option
                v-for="item in ProvinceList"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="4">
            <label  >请选择市：</label>
          </el-col>
          <el-col :span="8" >
            <el-select v-model="city" placeholder="请选择" @visible-change="CityChange">
              <el-option
                v-for="item in getCity"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="4">
            <label>请选择区：</label>
          </el-col>
          <el-col :span="8">
            <el-select v-model="getCounty" placeholder="请选择" @visible-change="getCountyChange">
              <el-option
                v-for="item in County"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="4">
            <label>请输入邮费：</label>
          </el-col>
          <el-col :span="8">
            <el-input v-model="price" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-button type="primary" @click="saveChange">保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from "../Header/Header";
  import HeaderOne from "../Header/HeaderOne";
  import Axios from "axios";
  import storage from "../../storage/storage";
  export default {
    name: "Address",
    components: {HeaderOne, Header},
    data() {
      return {
        title: "添加地址",
        ProvinceList:[],
        province:"",
        getCity:[],
        city:"",
        County:[],
        getCounty:"",
        price:"",
        value: ''
      }
    },
    mounted(){
      // this.title=this.$store.state.title.title;
      // this.title = this.$route.path.replace("/","");
      this.ProvinceChange();
    },
    methods:{
      //省
      ProvinceChange(){
        const api = window.g.getProvince;
        Axios.get(api).then((res)=>{
          this.ProvinceList=res.data.data;
        }).catch((err)=>{
          console.log(err)
        })
      },
      //市
      CityChange(){
        const api = window.g.getCity;
        const param = {
              params:{
                province:this.province
              }
        };
        Axios.get(api,param).then((res)=>{
          this.getCity=res.data.data;
        }).catch((err)=>{
          console.log(err)
        })
      },
    //  区
      getCountyChange(){
        const api = window.g.getCounty;
        const param = {
          params:{
            city:this.city
          }
        };
        Axios.get(api,param).then((res)=>{
          this.County=res.data.data;
        }).catch((err)=>{
          console.log(err)
        })
      },
    //  提交
      saveChange(){
        const api = window.g.findCost;
        const param = new URLSearchParams();
              param.append("provine",this.province);
              param.append("city",this.city);
              param.append("county",this.getCounty);
              param.append("price",this.price);
        Axios.post(api,param).then((res)=>{
          console.log(res);
          storage.remove("rowList");
          this.$router.push({path:'/Postage'});
        }).catch((err)=>{
          console.log(err)
        })
      },
    //  修改
      delupdate(){
        this.adsList = storage.get("rowList");
        if (this.adsList === null || this.adsList === undefined){
          console.log("999")
        }else if(this.adsList !== null || this.adsList !==undefined){
          this.province=this.adsList.provine;
          this.city=this.adsList.city;
          this.getCounty=this.adsList.county;
          this.price=this.adsList.price;
        };
        const api = window.g.delupdate;
        const param = new URLSearchParams();
              param.append("provine",this.province);
              param.append("city",this.city);
              param.append("county",this.getCounty);
              param.append("price",this.price);
        Axios.post(api,param).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err);
        })
      },
    },
    activated(){
      this.delupdate();
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Address
    width 100%
    background #FFFFFF
  #Address .el-col-8
    margin-top 2%
  #Address .el-col-4
    margin-top 3.5%
  #Address button
    width 50%

</style>
