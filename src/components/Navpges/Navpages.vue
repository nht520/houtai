<template>
    <div id="Navpages">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Navpages",
        data(){
          return{
            currentPage1: 1,
            currentPage2: 2,
            currentPage3: 3,
            currentPage4: 4
          }
        },
        methods:{
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        },
        mounted(){

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #Navpages
      text-align right
      padding 1% 1% 1% 0%
      background #FFFFFF

</style>
