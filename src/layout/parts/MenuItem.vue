<template>
  <div v-if="!item.hidden">
    <el-submenu v-if="hasChildren">
      <menu-item v-for="child in item.children" :key="child.path" :item="child"/>
    </el-submenu>

    <el-menu-item v-else>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChildren () {
      return Array.isArray(this.item.children) && this.item.children.length > 0
    }
  }
}
</script>
