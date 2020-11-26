<template>
  <div v-if="!route.hidden">
    <el-submenu v-if="hasChildren" :index="routePath">
      <template slot="title">{{ route.meta.title }}</template>
      <menu-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        :base-path="routePath"
      />
    </el-submenu>

    <el-menu-item v-else :index="routePath">
      <span>{{ route.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'MenuItem',
  props: {
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasChildren () {
      return Array.isArray(this.route.children) && this.route.children.length > 0
    },
    routePath () {
      return path.join(this.basePath, this.route.path)
    }
  }
}
</script>
