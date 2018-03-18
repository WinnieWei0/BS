<template>
  <div class="loginBox">
    <h1>注册</h1>
		<el-form :model="user" :rules="rules" ref="userForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="name">
				<el-input v-model="user.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="user.password" type="password"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="confirmPwd">
				<el-input v-model="user.confirmPwd" type="password"></el-input>
			</el-form-item>
			<router-link :to="{path:'/user/login'}">已有账号？去登录</router-link>
			<el-form-item>
				<el-button type="primary" @click="loginForm('userForm')">注册</el-button>
			</el-form-item>
		</el-form>
  </div>
</template>

<script>
  export default {
    data(){
			return {
				user:{
					name:'',
					password:'',
          confirmPwd:''
				},
				rules:{
					name:[
						{ required: true, message: '请输入用户名', trigger: 'blur' }
					],
					password:[
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 4, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
					],
					confirmPwd:[
						{ required: true, message: '请确认密码', trigger: 'blur' },
						{ min: 4, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
					]
				}
			}
		},
    methods: {
      loginForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('/register',{userName:this.user.name,userPwd:this.user.password}).then(res=>{
							console.log(res)
							if(res.data.code===200){
								this.$message({message: res.data.msg,type: 'success'});
								this.$router.push('/login')
							}else if(res.data.code===500){
								this.$message({message:res.data.msg,type: 'warning'});
							}
						})
          } else {
            return false;
          }
        })
      }
    }
  }
</script>

<style scoped lang='less'>
.loginBox{
	width: 300px;
	margin: 100px auto;
	border: 1px solid #ccc;
	padding: 30px;
	border-radius: 5px;
  box-shadow: 0 0 20px #bbb;
  h1{
    height: 50px;
    text-align: center;
    margin-bottom: 10px;
	}
	.el-form-item{
		margin-top: 15px;
	}
}
</style>