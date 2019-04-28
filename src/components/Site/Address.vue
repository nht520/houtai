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
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-row>
          <el-col :span="4">
            <label>请选择市：</label>
          </el-col>
          <el-col :span="8">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
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
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
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
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-button type="primary" >保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from "../Header/Header";
  import HeaderOne from "../Header/HeaderOne";
  export default {
    name: "Address",
    components: {HeaderOne, Header},
    data() {
      return {
        title: "添加地址",
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    mounted(){
      // this.title=this.$store.state.title.title;
      // this.title = this.$route.path.replace("/","");
    },
    methods:{

    }
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
