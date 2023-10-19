
<template>
  <div class="header flex-start-center">
    <h1 class="logo">
      <img src="@/assets/images/icon.png" alt="" class="logo-img">
    </h1>
    <ul class="menu-list flex-start-center">
      <li class="menu-item"><nuxt-link to="/">HOME</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/todo-list">TODO-LIST</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/about">ABOUT</nuxt-link></li>
      <li class="menu-item"><nuxt-link to="/news">NEWS</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.header{
  .logo{
    width: 50px;
    height: 50px;
    .logo-img{
      width: 100%;
      height: 100%;
    }
  }
  .menu-list{
    padding-left: 100px;
    .menu-item{
      width: 100px;
      height: 48px;
      line-height: 48px;
      font-size: 14px;
      text-align: center;
      a{
        color: #00dc82;
      }
    }
  }
}
</style>
