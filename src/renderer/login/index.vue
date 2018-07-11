<template>
  <div id="wrapper">
    <vue-particles color="#dedede"
                   :particleOpacity="0.7"
                   :particlesNumber="100"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#fff"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="2"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
                   class="lizi">
    </vue-particles>
    <error-tip :visible="errorTip.visible"
               :message="errorTip.message">
    </error-tip>
    <el-form label-position="left">
      <el-row style="-webkit-app-region: drag;padding:10px 0px">
        <i class="close-window el-icon-circle-close"
           @click="closeWindow"></i>
      </el-row>
      <el-row>
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"
                    clearable
                    v-model="username">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="密码">
          <el-input type="password"
                    placeholder="请输入密码"
                    clearable
                    v-model="password">
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item>
          <el-button class="login"
                     @click="loginSubmit">
            登&nbsp;&nbsp;录
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import ErrorTip from './error-tip'
  export default {
    name: 'loginPage',
    data () {
      return {
        username: '',
        password: '',
        errorTip: {
          visible: false,
          message: ''
        }
      }
    },
    components: {
      ErrorTip
    },
    methods: {
      /**
       * 关闭窗口
       */
      closeWindow () {

      },
      /**
       * 用户登录
       */
      loginSubmit () {
        if (!/^admin$/.test(this.username)) {
          this.errorTip.visible = false
          this.errorTip.message = '用户名不存在!'
        }
      }
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Source Sans Pro", sans-serif;
  }

  #wrapper {
    background: #1b1242;
    /* background: rgb(15, 36, 28); */
    height: 100vh;
    padding: 0px 20px 20px;
    width: 100vw;
    position: relative;
  }
  #wrapper .el-form {
    background: transparent;
  }
  #wrapper .el-form .el-form-item__label {
    /* color: #eee; */
    color: #ddd;
    font-size: 13px;
  }
  #wrapper .el-form .el-input__inner {
    color: #333;
    border: 0 none;
    padding: 5px 10px;
  }
  #wrapper .el-form .login {
    background: rgb(246, 52, 52);
    border: 0 none;
    color: #eee;
    width: 100%;
  }
  #wrapper .close-window {
    color: rgb(252, 88, 88);
    cursor: pointer;
  }
  .lizi {
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    top: 0px;
  }
</style>
