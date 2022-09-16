<template>
  <div class="title">
    <div class="left-title">
      <div><span>管理后台</span></div>
    </div>
    <div class="rigth-title">
      <el-button type="primary" link>修改密码</el-button>
      <span>{{ username }}</span>
      <div>
        <span>退出登录</span
        ><el-icon color="#FFFFFF" class="no-inherit icons"
          ><SwitchButton
        /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SwitchButton } from "@element-plus/icons-vue";
import { ref } from "vue";
const username = ref("dd");
</script>

<style lang="scss" scoped>
// *{
//   margin: 0;
//   padding: 0;
// }
.title {
  height: 74px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-title {
  height: 100%;
  width: 230px;
  background-color: #6b6b6b;
  > div {
    margin: 16px auto;
    width: 161px;
    height: 40px;
    font-size: 20px;
    border-radius: 3px;
    // font-weight: 700;
    background-color: #ffffff75 !important;
    > span {
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      color: #ffffff;
    }
  }
}

.rigth-title {
  display: flex;
  justify-content: end;
  // justify-content: space-between;
  width: calc(100% - 230px);
  height: 100%;
  background-color: rgba(25, 158, 216, 1);
  > div {
    margin: 0 10px;
    line-height: 74px;
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    >.icons {
      font-size: 22px;
      padding-left: 5px;
    }
  }
  > button {
    color: #ffffff;
  }
  > span {
    margin: 0 10px;
    line-height: 74px;
    color: #ffffff;
    font-size: 16px;
  }
}
</style>