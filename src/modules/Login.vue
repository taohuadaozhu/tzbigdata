<style scoped>
  .login {
    margin-top: 16px;
  }

  .login-form {
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    padding: 16px;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   
  }
   .title {
     
      margin: 0px auto 30px auto;
      padding: 0px 35px 15px 0px;
      height: 40px;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .btn{width:100px;cursor: pointer;}
</style>
<template>
<el-form :model="user" :rules="rules" ref="loginForm" label-position="left" label-width="0px" label-suffix="：" class="demo-ruleForm login-container">
  <h3 class="title">系统登录</h3>
  <el-form-item  prop="name">
    <el-input type="text" v-model.number.trim="user.name" auto-complete ="off" placeholder="账号"></el-input>
  </el-form-item>
  <el-form-item  prop="pass">
    <el-input type="password" v-model="user.pass" auto-complete="off" placeholder="密码"></el-input>
  </el-form-item>
  <el-form-item style="width:50%;float:left;">
    <el-button class="btn" type="primary" @click.native.prevent="login('loginForm')" :loading="logining">登录</el-button>
  </el-form-item>
  <el-form-item style="width:50%;float:left;">
    <el-button  class="btn" style="float:right;" type="primary" >注册</el-button>
  </el-form-item>
  <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
</el-form>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      let checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('登录ID不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须大于18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      return {
        logining: false,
        checked: true,
        user: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {type: 'number', required: true, message: '请输入登录ID，必须为数字', trigger: 'blur'},
            {validator: checkName, trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度为 3~15 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    computed: mapGetters([
      'tokens'
    ]),
    watch: {
      tokens: function (val) {
        this.$router.push('/nav/dashboard/dash1');
      }
    },
    methods: {
      login(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logining = true;
            this.$store.dispatch('login', {name: this.user.name, pass: this.user.pass})
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
