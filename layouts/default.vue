
<template>
  <div class="layout">
    <CommonMiddleContainer>
      <CommonHeader />
      <div class="content">
        <slot />
      </div>
      <CommonFooter />
    </CommonMiddleContainer>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 40px 0;
  min-height: calc(100vh - 130px);
}
</style>