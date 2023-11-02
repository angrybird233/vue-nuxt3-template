<template>
  <div class="index-page">
    <!-- <NuxtWelcome /> -->
    <ContentDoc path="/vue" />

  </div>
</template>

<script lang="ts" setup>
const contentQuery = queryContent('articles')

console.log(contentQuery);

</script>


<style lang="less" scoped>
.index-page {}
</style>