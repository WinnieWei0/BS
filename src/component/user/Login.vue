<template>
	<div class="loginBox">
		<h1>登录</h1>
		<el-form :model="user" :rules="rules" ref="userForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="name">
				<el-input v-model="user.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="user.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="loginForm('userForm')">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "root",
        password: "root"
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 4, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    loginForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/login", { userName: this.user.name })
            .then(res => {
              console.log(res);
              if (res.data.length) {
                if (
                  this.user.name === res.data[0].userName &&
                  this.user.password === res.data[0].userPwd
                ) {
                  this.$router.push("/");
                  sessionStorage.setItem("user", JSON.stringify(res.data[0]));
                } else {
                  this.$message.error("账号或密码错误");
                }
              } else {
                this.$message.error("账号或密码错误");
              }
            });
        }
      });
    }
  }
};
</script>

<style scoped lang='less'>
.loginBox {
  width: 300px;
  margin: 100px auto;
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 20px #bbb;
  h1 {
    height: 50px;
    text-align: center;
    margin-bottom: 10px;
  }
  .el-form-item__content {
    text-align: center;
  }
}
</style>