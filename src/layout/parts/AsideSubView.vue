<template>
  <div :class="['aside-sub-view', { 'fixed': fixed }]">
    <div class="menu-name">{{ route.meta.title }}</div>

    <!-- 二级菜单 -->
    <el-scrollbar class="sub-menu">
      <el-menu :default-openeds="submenuIndexList" @select="onMenuSelect">
        <menu-item
          v-for="child in route.children"
          :key="child.path"
          :route="child"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import path from 'path'

function getSubmenuIndexList (results, routes, basePath) {
  routes.forEach(route => {
    const hasChildren = Array.isArray(route.children) && route.children.length > 0
    if (hasChildren) {
      const p = path.join(basePath, route.path)
      results.push(p)
      getSubmenuIndexList(results, route.children, p)
    }
  })
}

export default {
  components: {
    MenuItem: () => import('./MenuItem')
  },
  props: {
    fixed: Boolean,
    route: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      submenuIndexList: []
    }
  },
  watch: {
    route: {
      handler: function (val) {
        getSubmenuIndexList(this.submenuIndexList, val.children, val.path)
      },
      immediate: true
    }
  },
  methods: {
    onMenuSelect (index) {
      this.$router.push(index)
    }
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
    line-height: 56px;
    border-bottom: $border;
    box-sizing: border-box;
    padding: 0 20px;
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
