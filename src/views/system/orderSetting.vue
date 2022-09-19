<template>
    <div>
        <el-container>
            <el-header>
                <div class="fontBox">国家管理</div>
                <hr>
            </el-header>
            <el-main>
                <el-form :model="form" label-width="200px">
                    <el-form-item label="订单自动取消时间">
                        <el-col :span="6"><el-input v-model="form.cancelTime"/></el-col><el-col :span="2">小时</el-col>
                    </el-form-item>
                    <el-form-item label="一般贸易自动确认收货时间">
                        <el-col :span="6"><el-input v-model="form.confirmTime" /></el-col><el-col :span="2">天</el-col>
                    </el-form-item>
                    <el-form-item label="延长收货时间">
                        <el-col :span="6"><el-input v-model="form.extendTime" /></el-col><el-col :span="2">天</el-col>
                    </el-form-item>
                    <el-form-item label="保税备货自动确认收货时间">
                        <el-col :span="6"><el-input v-model="form.confirmTime1" /></el-col><el-col :span="2">天</el-col>
                    </el-form-item>
                    <el-form-item label="保税备货单笔订单金额">
                        <el-col :span="6"><el-input v-model="form.orderAmount" /></el-col>
                    </el-form-item>
                    <el-form-item label="设置退货地址" >
                        <el-col :span="6"><el-input v-model="form.name" placeholder="姓名"/></el-col>
                    </el-form-item>
                    <el-form-item label="" >
                        <el-col :span="6"><el-input v-model="form.tel" placeholder="联系方式"/></el-col>
                    </el-form-item>
                    <el-form-item label="">
                        <el-col :span="6">
                            <el-select v-model="form.province" placeholder="省">
                                <el-option label="四川" value="四川" />
                                <el-option label="湖北" value="湖北" />
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <el-select v-model="form.city" placeholder="市">
                                <el-option label="成都" value="成都" />
                                <el-option label="武汉" value="武汉" />
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <el-select v-model="form.area" placeholder="区">
                                <el-option label="双流" value="双流" />
                                <el-option label="成华" value="成华" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="" >
                        <el-col :span="6"><el-input v-model="form.address" placeholder="详细地址"/></el-col>
                    </el-form-item>
                    <el-form-item label="">
                        <el-col :span="8"><el-input v-model="form.describe" type="textarea" placeholder="备注信息" /></el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
        

        
    </div>
</template>
<script lang="ts" setup>
import { proxyRefs, reactive } from 'vue'
const form = reactive({
    cancelTime: '',
    confirmTime: '',
    extendTime: '',
    confirmTime1: '',
    orderAmount: '',
    name: '',
    tel: '',
    province: '',
    city: '',
    area: '',
    address: '',
    describe: '',
})



const onSubmit = () => {
  console.log(form);
  
}
</script>
<style lang="scss" scoped>
.fontBox{
        font-size: 20px;
        text-align: left;
        height: 60px;
        line-height: 60px;
    }
</style>