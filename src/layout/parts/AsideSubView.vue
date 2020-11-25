<template>
  <div :class="['aside-sub-view', { 'fixed': fixed }]">
    <div class="menu-name">{{ title }}</div>

    <!-- 二级菜单 -->
    <el-scrollbar class="sub-menu">
      <el-menu>
        <el-submenu>
          <template slot="title">111</template>
          <el-menu-item>
            <span>商品</span>
          </el-menu-item>
          <el-menu-item>
            <span>卡券</span>
          </el-menu-item>
          <el-menu-item>
            <span>账号</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item>
          <span>客户</span>
        </el-menu-item>
        <el-menu-item>
          <span>晒单</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    fixed: Boolean
  }
}
</script>

<style lang="scss" scoped>
.aside-sub-view {
  background: #ffffff;
  width: 132px;
  border-right: $border;

  &.fixed {
    height: 100vh;
    position: fixed;
    left: 92px;
    top: 0;
  }

  .menu-name {
    height: 56px;
    border-bottom: $border;
    box-sizing: border-box;
  }

  .sub-menu {
    height: calc(100% - 56px);
    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }

  .el-menu {
    border-right: none;
  }
}
</style>
