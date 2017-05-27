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
    .img-vali{
        float:right;
        margin-right:80px;
        margin-top:5px;
        width: 80px;
        height: 30px;
    }
</style>
<template>
<el-form :model="user" :rules="rules" ref="loginForm" label-position="left" label-width="0px" label-suffix="：" class="demo-ruleForm login-container">
  <div class="tab-content"><div class="tab tab-active" @click="tagChange(1)" >手机号注册</div><div class="tab tab-right"  @click="tagChange(2)" >邮箱注册</div></div>
  <div class="passlayer" v-show="1===showLayer">
    <el-form-item  prop="tel">
      <el-input type="text" v-model.number.trim="user.tel" auto-complete ="off" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item  prop="veri">
      <el-input type="text" v-model.number.trim="user.veri" auto-complete ="off" placeholder="输入右侧验证码" style="width:50%;"></el-input>
      <img class="img-vali" src=""/>
    </el-form-item>
    <el-form-item  prop="veri-tel">
      <el-input type="text" v-model.number.trim="user.veriTel" auto-complete ="off" placeholder="短信验证码" style="width:50%;"></el-input>
      <el-button>获取验证码</el-button>
    </el-form-item>
    <el-form-item  prop="pass" >
      <el-input type="password" v-model="user.pass" auto-complete="off" placeholder="设置密码3-15位"></el-input>
    </el-form-item>
    
     
  </div>
  <div class="phonelayer" v-show="2===showLayer">
    <el-form-item  prop="mail">
      <el-input type="text" v-model.number.trim="user.mail" auto-complete ="off" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item  prop="veri">
      <el-input type="text" v-model.number.trim="user.veri" auto-complete ="off" placeholder="输入右侧验证码" style="width:50%;"></el-input>
      <img class="img-vali" src=""/>
    </el-form-item>
    
  </div>
  <el-form-item >
      <el-button class="btn" type="primary" @click.native.prevent="login('loginForm')" :loading="logining">注册</el-button>
    </el-form-item>
  <el-form-item>
    <label>已有edp账号？</label><el-button type="text" @click.native.prevent="login()">立即登录</el-button>
  </el-form-item>
  
</el-form>
</template>
<script>
  import {mapGetters} from 'vuex'
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
              if(!/^[\w|\d]{4,16}$/.test(value)){
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

      let checkTel = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入正确手机号'));
        }
        setTimeout(() => {
          //验证手机号
            if(!/^[0-9]{11}$/.test(value)){
              return callback(new Error('手机号错误！'));
            }else{
              callback();
            }
        }, 500);
      };

      return {
        logining: false,
        checked: true,
        showLayer:1,
        user: {
          name: '',
          pass: '',
          tel: '',
          veri:'',
          veriTel:'',
          mail:''
        },
        rules: {
          tel: [
            {validator: checkTel, trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度为 3~15 个字符', trigger: 'blur'}
          ],
          mail:[{type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]

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
      login:function(){
        this.$router.push('/login');
      },
      tagChange:function(index){
        this.showLayer = index;
      }
    //   ,
    //   login(formName) {

    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         this.logining = true;
    //         this.$store.dispatch('login', {name: this.user.name, pass: this.user.pass})
    //       } else {
    //         return false;
    //       }
    //     });
    //   }
    }
  }
</script>
