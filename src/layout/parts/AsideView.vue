<template>
  <div class="aside-view">
    <!-- 一级 -->
    <div class="main-side">
      <div class="logo-wrap"></div>

      <!-- 一级菜单 -->
      <div style="overflow:hidden">
        <div class="main-menu" :style="{ marginRight: `-${scrollbarWidth}px` }">
          <el-menu
            :default-active="activeMenuRoute.path"
            @select="onMenuSelect"
            @mouseenter.native="onMenuEnter"
            @mouseleave.native="onMenuLeave"
          >
            <el-menu-item
              v-for="route in menuRoutes"
              :key="route.path"
              :index="route.path"
              :class="{ 'is-hover': hoverMenuRoute && hoverMenuRoute.path === route.path }"
              @mouseenter.native="onMenuItemEnter(route)"
              @mouseleave.native="onMenuItemLeave"
            >
              <span>{{ route.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>

    <!-- 二级 -->
    <aside-sub-view :route="activeMenuRoute"/>

    <!-- 二级 hover 展示 -->
    <aside-sub-view
      style="background:#cff"
      :route="hoverMenuRoute"
      fixed
      @mouseenter.native="onHoverSideEnter"
      @mouseleave.native="onHoverSideLeave"
      v-if="hoverSideVisible && hoverMenuRoute"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getScrollbarWidth } from '@/utils'

export default {
  components: {
    AsideSubView: () => import('./AsideSubView')
  },
  data () {
    return {
      scrollbarWidth: getScrollbarWidth(),
      hoverMenuRoute: null,
      hoverSideVisible: false,
      isOnMenu: false,
      isOnHoverSide: false
    }
  },
  computed: {
    ...mapGetters([
      'permissionRoutes'
    ]),
    menuRoutes () {
      return this.permissionRoutes.filter(route => !route.hidden)
    },
    activeMenuRoute () {
      const path = this.$route.matched[0].path
      return this.menuRoutes.find(route => route.path === path)
    }
  },
  methods: {
    onMenuSelect (index) {
      this.$router.push(index)
    },

    onMenuEnter () {
      this.hoverSideVisible = true
      this.isOnMenu = true
    },
    onMenuLeave () {
      this.isOnMenu = false
      if (!this.isOnMenu && !this.isOnHoverSide) {
        this.hoverSideVisible = false
      }
    },

    onMenuItemEnter (route) {
      this.hoverMenuRoute = route
    },
    onMenuItemLeave () {
    },

    onHoverSideEnter () {
      this.isOnHoverSide = true
    },
    onHoverSideLeave () {
      this.isOnHoverSide = false
      if (!this.isOnMenu && !this.isOnHoverSide) {
        this.hoverSideVisible = false
      }
    }
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
    height: calc(100vh - 56px);
    overflow-y: scroll;
  }

  .el-menu {
    background: initial;
    border-right: none;
  }
  .el-menu-item {
    color: #ffffff;
    &:hover, &.is-hover {
      background: #666666;
    }
    &:focus, &.is-active {
      background: #ffffff;
      color: #333333;
    }
  }
}
</style>
