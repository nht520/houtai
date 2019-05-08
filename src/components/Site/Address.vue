<template>
  <div id="Address">
    <HeaderOne :header="title"></HeaderOne>
    <!--  详情-->
    <el-row>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>排序：</label>
          </el-col>
          <el-col :span="14">
            <el-input v-model="price" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>配送名称：</label>
          </el-col>
          <el-col :span="14">
            <el-input v-model="price" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>是否默认：</label>
          </el-col>
          <el-col :span="14">
            <v-switch
              v-model="rdioewitch"
              color="blue"
              value="red"
              hide-details
            ></v-switch>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>计费方式：</label>
          </el-col>
          <el-col :span="17">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>物流公司：</label>
          </el-col>
          <el-col :span="14">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in logistics"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>配送区域：</label>
          </el-col>
          <el-col :span="14">
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
      <el-col :span="3">
        <el-row>
          <el-col :span="3">
            <label  >市：</label>
          </el-col>
          <el-col :span="14" >
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
      <el-col :span="3" >
        <el-row>
          <el-col :span="3">
            <label>区：</label>
          </el-col>
          <el-col :span="14">
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
    </el-row>
    <el-row>
      <el-col :span="23" :offset="1">
        <el-row>
          <el-col :span="7">
            <label>配送区域：</label>
          </el-col>
          <el-col :span="16">
            <el-row class="addInput">
              <el-col :span="3">
                <p>首重(克)</p>
                <el-input v-model="price" placeholder="请输入内容"></el-input>
              </el-col>
              <el-col :span="3">
                <p>首重(克)</p>
                <el-input v-model="price" placeholder="请输入内容"></el-input>
              </el-col>
              <el-col :span="3">
                <p>首重(克)</p>
                <el-input v-model="price" placeholder="请输入内容"></el-input>
              </el-col>
              <el-col :span="3">
                <p>首重(克)</p>
                <el-input v-model="price" placeholder="请输入内容"></el-input>
              </el-col>
              <el-col :span="3">
                <p>首重(克)</p>
                <el-input v-model="price" placeholder="请输入内容"></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            根据重量来计算运费，当物品不足《首重重量》时，按照《首重费用》计算，超过部分按照《续重重量》和《续重费用》乘积来计算
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="1" >
        <el-row>
          <el-col :span="7">
            <label>请输入邮费：</label>
          </el-col>
          <el-col :span="8">
            <el-input v-model="price" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="1" v-show="save">
        <el-button type="primary" @click="saveChange">保存</el-button>
      </el-col>
      <el-col :span="11" :offset="1" v-show="show">
        <el-button type="primary" @click="delupdate" >修改</el-button>
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
        logistics:["顺风快递","百世快递","邮政快递","圆通快递","申通快递"],
        getCounty:"",
        price:"",
        value: '',
        save:true,
        show:true,
        radio: '1',
        rdioewitch:""
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
      //判断是否有值
      desever(){
        this.adsList = storage.get("rowList");
        if (this.adsList === null || this.adsList === undefined){
          console.log("999");
          this.save=true;
          this.show=false;
        }else if(this.adsList !== null || this.adsList !==undefined){
          this.province=this.adsList.provine;
          this.city=this.adsList.city;
          this.getCounty=this.adsList.county;
          this.price=this.adsList.price;
          this.id=this.adsList.id;
          this.save=false;
          this.show=true;
        };
      },
      //  修改
      delupdate(){
        const api = window.g.delupdate;
        const param = new URLSearchParams();
              param.append("provine",this.province);
              param.append("city",this.city);
              param.append("county",this.getCounty);
              param.append("price",this.price);
              param.append("id",this.id);
        Axios.post(api,param).then((res)=>{
          console.log(res);
          this.$router.push({path:'/Postage'});
          storage.remove("rowList");
        }).catch((err)=>{
          console.log(err);
        })
      },
    },
    activated(){
      this.desever();
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #Address
    width 100%
    background #FFFFFF
  #Address .el-col-8
  .addInput .el-col-3 input
    width 80%
  #Address button
    width 50%
  #Address .el-row
    margin 1% 0%
    line-height 45px

</style>
