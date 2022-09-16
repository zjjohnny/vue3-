<template>
  <div>
    <el-menu default-active="1" class="el-menu-vertical-demo" :router="true" >
      <!-- 有子路由 -->
      <div v-for="item in isNavData" :key="item.id">
        <!-- 没有子路由 -->
        <el-menu-item
          :index="item.id"
          :route="item.path"
          v-if="!item.children.length"
        >
          <el-icon><icon-menu /></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>

        <el-sub-menu v-else :index="item.id">
          <template #title>
            <el-icon><span :class="item.icon"></span></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              :route="el.path"
              v-for="(el, index) in item.children"
              :key="item.id + (index + 1)"
              :index="el.id"
              >{{ el.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import navData from "@/config/navbar";
import { computed } from "vue";
let isNavData = computed(() => {
  // 自动生成id
  for (let i = 0; i < navData.length; i++) {
    const el = navData[i];
    el.id = i + 1;
    if (el.children.length) {
      for (let j = 0; j < el.children.length; j++) {
        const element = el.children[j];
        element.id = el.id + "" + (j + 1);
      }
    }
  }
  return navData;
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}


</style>