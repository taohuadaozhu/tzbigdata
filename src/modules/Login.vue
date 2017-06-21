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
    .btn{width:100%;cursor: pointer;}
    .forgotpass{ float: right;margin: 0 10px 0 0;}
    .tab-content{width: 100%;height: 30px;margin-bottom: 20px;}
    .tab{
      float: left;
      width: 160px;
      height: 30px;
      line-height: 30px;
      margin: 0 0 15px 0;
      text-align: center;
      border-bottom: 3px solid white;
    }
    .tab:hover{ border-bottom: 3px solid skyblue;color: skyblue;}
    .tab-right{margin-left: 25px;}
    .tab-active{ border-bottom: 3px solid skyblue;color: skyblue;}
    .errmsg{color: red;}
</style>
<template>
<el-form :model="user" :rules="rules" ref="loginForm" label-position="left" label-width="0px" label-suffix="：" class="demo-ruleForm login-container">
  <div class="tab-content"><div class="tab tab-active" @click="tagChange(1)" >登录</div><div class="tab tab-right"  @click="tagChange(2)" >短信登录</div></div>
  <div class="passlayer" v-show="1===showLayer">
    <el-form-item  prop="name">
      <el-input type="text" v-model.number.trim="user.name" auto-complete ="off" placeholder="用户名/手机号/邮箱"></el-input>
    </el-form-item>
    <el-form-item  prop="pass" >
      <el-input type="password" v-model="user.pass" auto-complete="off" placeholder="密码3-15位"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <label class="forgotpass">忘记密码?</label>
     
  </div>
  <div class="phonelayer" v-show="2===showLayer">
    <el-form-item  prop="name">
      <el-input type="text" v-model.number.trim="user.name" auto-complete ="off" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item  prop="name">
      <el-input type="text" v-model.number.trim="user.name" auto-complete ="off" placeholder="输入右侧验证码"></el-input>
      <img src=""/>
    </el-form-item>
    <el-form-item  prop="name">
      <el-input type="text" v-model.number.trim="user.name" auto-complete ="off" placeholder="短信验证码"></el-input>
      <el-button>发送手机验证码</el-button>
    </el-form-item>
  </div>
  <label class="errmsg" v-if="showAlert">{{showText}}</label>
  <el-form-item >
      <el-button class="btn" type="primary" @click.native.prevent="login('loginForm')" :loading="logining">登录</el-button>
    </el-form-item>
  <el-form-item>
    <label>还没有edp账号？</label><el-button type="text" @click.native.prevent="register()">立即注册</el-button>
  </el-form-item>
  
</el-form>
</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import request from '../utils/request'
  import store from '../store'
  export default {
    data() {
      let checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名/手机号/邮箱'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            //验证邮箱
            if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)){
              //验证用户名
              if(!/^[\w|\d]{4,20}$/.test(value)){
                return  callback(new Error('非法用户名！'));
              }else{
                callback();
              }
            }else{
              callback();
            }
           
          } else {
            //验证手机号
            if(!/^[0-9]{11}$/.test(value)){
              return callback(new Error('手机号错误！'));
            }else{
              callback();
            }
          }
        }, 500);
      };
      return {
        logining: false,
        showText:'',
        checked: true,
        showAlert:false,
        showLayer:1,
        user: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {validator: checkName, trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 15, message: '长度为 3~15 个字符', trigger: 'blur'}
          ]
        }
      };
    },
    computed: mapGetters([
      'tokens'
    ]),
    watch: {
      tokens: function (val) {
        this.logining = false;
        if(val==='error'){
          this.showAlert = true;
          this.showText ="请求错误！";
          }else if(val){
          this.$router.push('/nav/dashboard/dash1');
        }else{
          this.showAlert = true;
          this.showText ="用户名或密码错误！";
        }
        
      }
    },
    methods: {
      register:function(){
        
        this.$router.push('/register');
        console.log(111);
      },
      tagChange:function(index){
        console.log(2===this.showLayer);
        this.showLayer = index;
      },
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logining = true;
            // request.get('http://192.168.31.234:8080/customLogin',{'username':this.user.name,'password':this.user.pass}).then((data) => {
            //   if(data.userName){
            //   }else{
            //     this.showAlert = true;
            //     this.showText =data.errorMsg;
            //   }
            //   this.logining = false;
            // }, (error) => {
            //   //fail
            //   this.logining = false;
            //   this.showAlert = true;
            //   this.showText ="请求错误！";
            //   console.log(error);
            // })
            
           this.$store.dispatch('login', {name: this.user.name, pass: this.user.pass}).then(() => {
             this.logining = false;
           });
           
          } else {
            this.logining = false;
            return false;
          }


        });
      }
    }
  }
</script>
