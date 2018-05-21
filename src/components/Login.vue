<template>
<div id="login-input">
    <h4>登录</h4>
    <div><label>账号</label><input type="tel" maxlength="11" placeholder="请输入手机号" v-model="account.phone"></div>
    <div><label>密码</label><input type="passWord" placeholder="请输入密码" v-model="account.passWord"></div>
    <a class="submit" :class="{disabled:disabled}" @click="submit"><span>登录</span></a>
    <p>
      <router-link to="/home/login">手机快速注册</router-link>
      <router-link to="/home/fogetPassword">找回密码</router-link>
    </p>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: {
        phone: '',
        passWord: ''
      },
      disabled: true
    }
  },
  methods: {
    submit () {
      if (!this.disabled) {
        alert('登录方法暂时还没写')
      }  
    }
  },
   watch: {
    account: {
      handler: function (value) {
        if (this.account.phone !== '' && this.account.passWord !== '') {
          this.disabled = false
        } else {
          this.disabled = true
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="postcss" src="../assets/style/common.css"> </style>
<style lang="postcss" scoped>
#login-input{
  & h4{
    font-weight: 100;
    letter-spacing: 3px;
    font-size: 38px;
    margin-bottom: 100px;
  }
  & div{
    margin: 0 auto;
    position: relative;
    text-align: left;
    width: 640px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    & input{
      width: 500px;
      height: 45px;
      line-height: 45px;
      border: none;
      padding-left: 30px;
      font-size: 30px;
      color: #333;
      &:focus{
        outline: none;
      }
      &::-webkit-input-placeholder{
        font-size: 30px;
      }
    }
    &:after{
      display: block;
      position: absolute;
      bottom: 0;
      content: '';
      background: #ccc;
      height: 1px;
      width: 640px;
    }
  }
  & .submit{
    display: block;
    margin: 0 auto;
    width: 640px;
    height: 80px; 
    line-height: 80px;
    background: #f00;
    border-radius: 8px;
    color: #fff;
    font-size: 30px;
    margin-top: 60px;
    letter-spacing: 3px;
  }
  & .submit.disabled span{
    opacity: 0.5;
  }
  & p{
    display: flex;
    justify-content: space-between;
    width: 640px;
    margin: 0 auto;
    margin-top: 60px;
    & a{
      color: #666;
      font-size: 26px;
    }
  }
}
</style>
