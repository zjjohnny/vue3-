<template>
  <div>
    <Header />
    <div>
      <Navbar class="nav"></Navbar>
    </div>
    <div class="isContent">
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Navbar from "@/components/navbar.vue";
export default {
  components: {
    Header,
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 83px;
  left: 10px;
  /* 宽度设置 */
  width: 230px;
  height: calc(100vh - 83px);
  // background-color:rgba(25, 158, 216, 1);
  overflow-y: auto;
}
.nav::-webkit-scrollbar {
  /* 纵向滚动条的宽 */
  width: 8px;
  /* 横向滚动条的高 */
  height: 8px;
  /* border: 2px solid red; */
  background-color: #fff;
}

.nav::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(148, 70, 70);
  background-clip: padding-box;
  border: 1px solid transparent;
}
.nav::-webkit-scrollbar-thumb:hover {
  background-clip: border-box;
}

.isContent {
  position: absolute;
  top: 83px;
  left: 240px;
  overflow-y: auto;
  width: calc(100vw - 300px);
  height: calc(100vh - 125px);
  padding: 20px;
  background-color: rgb(243, 248, 255);
}
</style>