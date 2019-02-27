<template>
  <div>
    <router-link  v-for="item in nvaigtion" :to="item.path" :key="item.id"  tag="li">
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Navigation",
        data(){
          return{
            nvaigtion:[
              {
                id:0,
                path:'/List',
                title:"首页",
                icon:"fa fa-heart",
              },
              {
                id:1,
                path:'/Details',
                title:"列表",
                icon:"fa fa-bomb",
              },
            ]
          }
        },
        methods: {
          // handleOpen(key, keyPath) {
          //   console.log(key, keyPath);
          // },
          // handleClose(key, keyPath) {
          //   console.log(key, keyPath);
          // }
        }
    }
</script>

<style scoped>

</style>
