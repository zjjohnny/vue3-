<template>
  <div>会员管理</div>
</template>

<script>
import { onBeforeMount } from "vue";
import axios from "../../plugins/axiosInstance";
// import axios from "axios";
export default {
  name: "Client",
  setup() {
    onBeforeMount(() => {
      axios.get("getAllUser.do?id=1").then((res) => {
        console.log(res.data);
      });
    });
  },
};
</script>

<style></style>
