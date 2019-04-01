<template>
  <div class="hello">
   <div class="content">
      <h2>后台登录</h2>
     <v-form v-model="valid">
       <v-container>
         <v-flex xs12>
           <v-text-field
             type="username"
             v-model="username"
             :rules="nameRules"
             :counter="10"
             label="请输入账号"
             required
           ></v-text-field>
         </v-flex>
         <v-flex xs12>
           <v-text-field
             type="password"
             v-model="password"
             :rules="passwordRules"
             :counter="10"
             label="请输入密码"
             required
             @keyup.enter="submit"
           ></v-text-field>
         </v-flex>
         <v-flex xs12>
           <v-btn class="button" color="info" @click="goLogin" >登 陆</v-btn>
         </v-flex>
       </v-container>
     </v-form>
   </div>
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
        valid: false,
        username:"",
        password:"",
        nameRules: [
          v => !!v || '用户名不能为空',
          v => v.length <= 10 || '用户名不能大于6个字符'
        ],
        passwordRules: [
          v => !!v || '密码不能为空',
          v => v.length <= 10 || '密码在10个字符以内'
        ],
      }
    },
    methods:{
      goLogin(){
        let _this = this;
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
                  _this.$router.push({path:'/Layout'});
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
      },
      submit() {
        //判断是否按下了回车
        this.goLogin();
      },
      //判断用户是否登录
      userLoding () {
        this.user = storage.get("user");
        if(this.user==null || this.user===undefined){
          this.$router.push({path:'/'});
        }else if(this.user!==null || this.user!==undefined){
          this.$router.push({path:'/Home'});
        }
      }
    },
    mounted(){
      this.userLoding()
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .hello
    background #1f2d3d
    position absolute
    height 100%
    width 100%
  .content
    width 500px
    height 350px
    padding 3%
    border-radius 5px
    background-color #FFFFFF
    box-shadow 10px 20px 30px #ffffff24
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    & h2
      text-align center
      color #292929
      font-weight bold
      font-size 18px
  .button
   background-color #292929 !important
   margin 0px
   width 100%
   margin-top 9%
   height 45px
</style>
