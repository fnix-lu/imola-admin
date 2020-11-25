<template>
  <div class="lay-container">
    <div class="lay-aside">
      <aside-view/>
    </div>
    <div class="lay-main">
      <div class="lay-header">
        <header-view/>
      </div>
      <div class="lay-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    HeaderView: () => import('./parts/HeaderView'),
    AsideView: () => import('./parts/AsideView')
  }
}
</script>

<style lang="scss" scoped>
.lay-container {
  height: 100vh;
  display: flex;
}
.lay-aside {
  flex-shrink: 0;
}
.lay-main {
  flex: 1;
}
.lay-header {
}
</style>
