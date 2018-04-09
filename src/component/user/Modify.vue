<template>
  <div>
    <h1>修改密码</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="当前密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="new">
        <el-input v-model="ruleForm.new"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirm">
        <el-input v-model="ruleForm.confirm"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        ruleForm: {
          password: '',
          new: '',
          confirm: ''
        },
        rules: {
          password: [
            { required: true, message: '请输入当前密码', trigger: 'blur' }
          ],
          new: [
            { required: true, message: '请输入新密码', trigger: 'blur' }
          ],
          confirm: [
            { required: true, message: '请确认密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        if(sessionStorage.getItem('user')){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.ruleForm.password===JSON.parse(sessionStorage.getItem('user')).userPwd){
              if(this.ruleForm.new===this.ruleForm.confirm){
                this.$axios.post('/changepwd',{password:this.ruleForm.new,id:JSON.parse(sessionStorage.getItem('user')).user_id}).then(res=>{
                  if(res.data.code===200){
                    this.$message({type:'success',message:res.data.msg})
                    this.$router.push('/user/login')
                  }else{
                    this.$message.error('密码修改失败')
                  }
                })
              }else{
                 this.$message.error('两次密码不一致')
              }
            }else{
               this.$message.error('当前密码不正确')
            }
          } else {
            return false;
          }
          });
        }
      }
    }
  }
</script>

<style scoped lang='less'>
.main>div{
  margin: 0 auto;
  text-align: center;
  background-color: white;
  min-height: 600px;
  h1{
    padding: 25px 0;
  }
}
</style>