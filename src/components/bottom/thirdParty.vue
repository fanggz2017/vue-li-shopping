<template>
<div id="third-login">
  <div class="third-login-wechat">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-social-wechat"></use>
    </svg> 
    <span>微信登录</span> 
  </div>
  <div class="third-login-qq">
     <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-social-qq"></use>
    </svg> 
    <span>QQ登录</span> 
  </div>
</div>
</template>

<script>
import '../../assets/iconfont/iconfont.css';
import '../../assets/iconfont/iconfont.js'
export default {
  
}
</script>

<style <style lang="postcss" scoped>
  #third-login{
    display: flex;
    width: 60vw;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: calc(100vh - 120vw);
    margin-left: 20vw;
    & .third-login-wechat span,& .third-login-qq span{
      display: block;
      font-size: 24px;
      margin-top: 10px;
    }
    & .icon {
       width: 60px;
       height: 60px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  }
  
</style>


