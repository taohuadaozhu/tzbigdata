<style scoped>
  .container{
      width:400px;
      height: 200px;
      margin:  200px auto;
  }
</style>
<template>
<div class="container">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码6-15位"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
    </el-form>
</div>

</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import request from '../utils/request'
  import store from '../store'
   export default {
    data() {
     
      var validatePass = (rule, value, callback) => {
          console.log(value.length)
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length<5||value.length>16){
            callback(new Error('请输入密码6-15位'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        alertdd(){
            console.log(window.location)
        },
        getQueryString(name) { 
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
            var r = window.location.search.substr(1).match(reg); 
            if (r != null) return unescape(r[2]); return null; 
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                let email = this.getQueryString('email');

                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
