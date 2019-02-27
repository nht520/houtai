<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <Navigation></Navigation>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <!--头部-->
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>apps</v-icon>
        </v-btn>
        <span class="hidden-sm-and-down">NHT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!--内容部分-->
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Navigation from "./Navigation";
  export default {
    components: {
      Navigation
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>
