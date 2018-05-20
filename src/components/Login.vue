<template>
<div id="login-input">
    <div><label>账号</label><input type="tel" maxlength="11" placeholder="请输入手机号"></div>
    <div><label>密码</label><input type="passWord" placeholder="请输入密码"></div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="postcss" scoped>
#login-input{
  & div{
    margin: 0 auto;
    position: relative;
    text-align: left;
    width: 640px;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    & input{
      width: 500px;
      height: 40px;
      line-height: 40px;
      border: none;
      padding-left: 30px;
      color: #333;  
      &:focus{
        outline: none;
      }
      &::-webkit-input-placeholder{
        font-size: 24px;
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
}
</style>
