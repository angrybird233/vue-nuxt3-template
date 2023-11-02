
<template>
  <div class="header flex-between-center">
    <h1 class="logo">
      <img src="@/assets/images/logo2.png" alt="" class="logo-img">
    </h1>
    <ul class="menu-list flex-start-center">
      <li class="menu-item"><nuxt-link to="/">首页</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/articles">文章</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/life">人生感悟</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/about">关于我</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.header{
  .logo{
    width: 191px;
    height: 50px;
    flex-shrink: 0;
    .logo-img{
      width: 100%;
      height: 100%;
    }
  }
  .menu-list{
    .menu-item{
      width: 100px;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      text-align: center;
      a:active, a:hover, .router-link-active{
        color: #1E90FF;
      }
    }
  }
}
</style>
