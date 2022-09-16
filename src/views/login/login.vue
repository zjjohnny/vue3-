<template>
  <div class="conetent">
    <div>
      <h1>管理后台</h1>
      <div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="checkPass" class="formitem">
            <el-input v-model="ruleForm.checkPass" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="pass" class="formitem">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <!-- <el-form-item label="验证码" prop="age" class="formitem">
            <el-input v-model.number="ruleForm.age" />
          </el-form-item> -->
          <el-form-item class="formitem">
            <el-button
              class="formitembtn"
              type="primary"
              @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
            <el-button class="formitembtn" @click="resetForm(ruleFormRef)"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";

const ruleFormRef = ref<FormInstance>();
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入账号"));
  } else {
    callback();
  }
};

const router = useRouter();

const ruleForm = reactive({
  pass: "123",
  checkPass: "hh",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // 登录成功去主页面
      router.push('/main');
      ElMessage("登录成功")
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.conetent {
  margin: 0;
  padding: 0;
  background-color: rgba(25, 158, 216, 1);
  height: calc(100vh - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 757px;
    height: 430px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 5px;

    > h1 {
      font-size: 28px;
      color: #0066cc;
      margin: 50px 0;
    }

    > div {
      width: 500px;
      height: calc(55px * 3 + 30px);
      margin: auto 80px;
    }
  }
}
.formitem {
  margin-bottom: 30px;
}

.formitembtn {
  margin: 0 auto;
  width: 150px;
}
</style>