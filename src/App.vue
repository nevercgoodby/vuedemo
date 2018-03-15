<template>
  <div id="app">

    <!-- 头部导航 -->
    <header class="header">
      <el-row>
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1">导航页面1</el-menu-item>
            <el-menu-item index="2">导航页面2</el-menu-item>
            <el-menu-item index="3">导航页面3</el-menu-item>
            <el-menu-item index="4">导航页面4</el-menu-item>
            <el-menu-item index="5">导航页面5</el-menu-item>
            <el-menu-item index="6" @click="back" >返回</el-menu-item>
            <el-menu-item index="7" @click="home" >首页</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>

    <div style="position: relative;height: 60px;width: 100%;"></div>
    
    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/" :class="{'isActive': active}">导航栏1</el-menu-item>
          <el-menu-item index="/main" :class="{'isActive': active}">导航栏2</el-menu-item>
          <el-menu-item index="/home" :class="{'isActive': active}">导航栏3</el-menu-item>
          <el-menu-item index="/" :class="{'isActive': active}">导航栏4</el-menu-item>
          <el-menu-item index="/" :class="{'isActive': active}">导航栏5</el-menu-item>
          <el-menu-item index="/" :class="{'isActive': active}">导航栏6</el-menu-item>
          <el-menu-item index="/active" :class="{'isActive': active}">导航栏7</el-menu-item>
          <el-menu-item index="/user" :class="{'isActive': active}">导航栏9</el-menu-item>
          <el-menu-item index="/test" :class="{'isActive': !active}">导航栏0</el-menu-item>
          <el-menu-item index="/help" :class="{'isActive': !active}">帮助</el-menu-item>
        </el-menu>
      </div>
      
      <!-- 右侧主内容区 -->
      <div  class="main-right" >
        <router-view class="view"></router-view>
      </div>
    </main>

  </div>
</template>

<!-- import Vue before Element 
<script src="https://unpkg.com/vue/dist/vue.js"></script>
-->
<!-- import JavaScript 
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
-->

<script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'

    Vue.use(Element)

    export default {
      name: 'App',
      data: function (){
        return {
          active:true
        }
      },
      methods: {
        back(){
            this.$router.back(-1)
        },
        home() {
            this.$router.next({path:"/home"})
        }
      }
    }
</script>

<style>
    body{margin: 0;}
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    /* 头部导航 */
    header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
    header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
    header .el-menu-demo{padding-left: 300px!important;}

    /* 主内容区 */
    main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
    main .main-left{text-align: center;width: 200px;float: left;}
    main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
    main .el-menu{background-color: transparent!important;}
</style>

