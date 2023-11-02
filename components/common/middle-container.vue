<template>
  <div class="middle-container">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
@media screen and (min-width: 1200px){
  .middle-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
  }
}
@media screen and (min-width: 750px) and (max-width: 1200px){
  .middle-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px 0;
  }
}
</style>