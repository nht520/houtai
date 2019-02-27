<template>
  <div class="hello">
    <v-text-field
      type="text"
      label="请输入你的账号"
      v-model="username"
      name="username"
    ></v-text-field>
    <v-text-field
      type="password"
      label="请输入你的密码"
      v-model="password"
      name="password"
    ></v-text-field>
    <button @click="goLogin()">登陆</button>
  </div>
</template>
<script>
  import Axios from "axios";
  import storage from "../storage/storage";
  import Hint from "./Hint/Hint";
  export default {
    name: 'Login',
    components: {Hint},
    data () {
      return {
        username:"",
        password:"",
      }
    },
    methods:{
      goLogin(){
        let _this = this;
        console.log(_this.username+_this.password);
        if (_this.username === "" || _this.username===null){
          this.$message('用户名不能为空');
        } else if( _this.password === "" || _this.password===null) {
          this.$message('请输入密码');
        } else if( _this.password.length<6 ){
          this.$message('密码在6-12位英文数字之间');
        } else {
          //把用户名  密码统一存在_param里面  把_param提交到后台
          const _param = new URLSearchParams();
                _param.append("empName",_this.username);
                _param.append("empPassword",_this.password);
          let Api = window.g.ParentPage.LoginApi;
          Axios.post(Api,_param).then((res)=>{
            console.log(res);
            if (res.status === 200){
                const code = res.data.status;
                if ( code === "1"){
                  _this.$store.commit('login',res.data.data);
                  // this.$store.dispatch('toggleFollowPerson',{userId:this.user.userid})
                  //将数据存在storage
                  storage.set("user",res.data.data);
                  _this.$router.push({path:'/Layout'})
                } else if( code === "0"){
                  this.$message(res.data.message);
                }else if ( code === "2") {
                  this.$message(res.data.message);
                }else {
                  this.$message(res.data.message);
                }
            } else{
              console.log(err);
              this.$message(res.data.message);
            }
          },(err)=>{
            console.log(err)
          })
        }
      }
    },
    mounted(){

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .hello
    /*background #f00*/
</style>
