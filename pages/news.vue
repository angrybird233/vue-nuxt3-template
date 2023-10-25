<template>
  <div class="news-page">
    <div>数字：{{ count }}</div>
    <div class="btns flex-start">
      <el-button type="primary" @click="add">+</el-button>
      <el-button type="primary" @click="dec">-</el-button>
    </div>

  </div>
</template>

<script lang="ts" setup>

const { count, add, dec} = useCounter();

</script>


<style lang="less" scoped>
.news-page {
  .btns{
    margin-top: 20px;
  }
}
</style>