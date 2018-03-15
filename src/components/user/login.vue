<template>
    <div class="login">

      <router-view class="view"></router-view>
        <el-input placeholder="请输入用户名" v-model="name" clearable> </el-input>
        <el-input placeholder="请输入密码" v-model="pswd" clearable> </el-input>

      <div class="input-group">
        <el-button  type="primary" @click="onLogin">登录</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </div>


    </div>
</template>

<script>

//export default {
//    data() {
//        return {
//            username: '',
//            pasword:'',
//        }  
//    },
//    methods: {
//        login: function() {
//            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
//              this.$router.push({ path: '/' }); //登录成功之后重定向到首页
//            }).catch(err => {
//              this.$message.error(err); //登录失败提示错误
//            });
//              
//            alert("login!")
//        },
//    }
//
//    methods: {
//      onLogin() {
//        console.log('submit!');
//        alert("submit!");
//      },
//
//      onSubmit() {
//        console.log('submit!');
//        alert("submit!");
//      }
//    }
//}
</script>


<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          pswd: '',
        }
      }
    },
    methods: {
      onSubmit:function() {
        console.log('submit!');
        alert("submit!");
      },
      onLogin:function() {
        console.log('submit!');
        alert("submit!");
      }
    }
  }
</script>

