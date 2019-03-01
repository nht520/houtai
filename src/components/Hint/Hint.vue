<template>
    <div class="Hint">
      <!--<el-alert v-show="int"-->
        <!--title="成功提示的文案"-->
        <!--close-text="知道了"-->
        <!--type="success">-->
      <!--</el-alert>-->
      <!--<el-alert v-show="int"-->
        <!--title="消息提示的文案"-->
        <!--close-text="知道了"-->
        <!--type="info">-->
      <!--</el-alert>-->
      <!--<el-alert v-show="int"-->
        <!--title="警告提示的文案"-->
        <!--close-text="知道了"-->
        <!--type="warning">-->
      <!--</el-alert>-->
      <!--<el-alert v-show="int"-->
        <!--title="错误提示的文案"-->
        <!--type="error"-->
        <!--close-text="知道了">-->
      <!--</el-alert>-->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Hint",
        data(){
          return{
            int:false,
            dialogVisible: false
          }
        },
        methods:{
          handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          },
          open() {
            this.$message('这是一条消息提示');
          },
          open2() {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },
          open3() {
            this.$message({
              message: '警告哦，这是一条警告消息',
              type: 'warning'
            });
          },
          open4() {
            this.$message.error('错了哦，这是一条错误消息');
          },
          open5() {
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
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
