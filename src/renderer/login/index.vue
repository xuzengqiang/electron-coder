<template>
  <div id="wrapper">
    <el-form label-position="left">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名"
                  clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"
                  placeholder="请输入密码"
                  clearable>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login">
          登&nbsp;&nbsp;录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'loginPage',
    methods: {
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
    background: rgb(15, 36, 28);
    height: 100vh;
    padding: 40px 20px;
    width: 100vw;
  }

  #wrapper .el-form .el-form-item__label {
    color: #eee;
  }
  #wrapper .el-form .el-input__inner {
    color: #333;
    border: 0 none;
  }
  #wrapper .el-form .login {
    background: rgb(236, 84, 84);
    border: 0 none;
    color: #eee;
    width: 100%;
  }
</style>
