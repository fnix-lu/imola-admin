<template>
  <div class="aside-view">
    <!-- 一级 -->
    <div class="main-side">
      <div class="logo-wrap"></div>

      <!-- 一级菜单 -->
      <el-scrollbar class="main-menu">
        <el-menu>
          <el-menu-item>
            <span>客户</span>
          </el-menu-item>
          <el-menu-item>
            <span>晒单</span>
          </el-menu-item>
          <el-menu-item>
            <span>活动</span>
          </el-menu-item>
          <el-menu-item>
            <span>商品</span>
          </el-menu-item>
          <el-menu-item>
            <span>卡券</span>
          </el-menu-item>
          <el-menu-item>
            <span>账号</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 二级 -->
    <aside-sub-view/>

    <!-- 二级 hover 展示 -->
    <aside-sub-view fixed/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    AsideSubView: () => import('./AsideSubView')
  },
  computed: {
    ...mapGetters([
      'permissionRoutes'
    ])
  }
}
</script>

<style lang="scss" scoped>
.aside-view {
  height: 100vh;
  display: flex;
}

.main-side {
  background: #444444;
  width: 92px;

  .logo-wrap {
    height: 56px;
  }

  .main-menu {
    height: calc(100% - 56px);
    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }

  .el-menu {
    background: initial;
    border-right: none;
  }
  .el-menu-item {
    color: #ffffff;
    &:hover {
      background: #666666;
    }
    &:focus {
      background: #ffffff;
      color: #333333;
    }
  }
}
</style>
