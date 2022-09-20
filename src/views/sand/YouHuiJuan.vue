<template>
    <div>
        <div>优惠劵列表<span>(共80条)</span></div>
        <el-divider />
        <div class="PutOne">
          <span class="PutBta">活动名称</span><div class="oneputa"><el-input v-model="input" placeholder="请输入活动名称" /></div>
        <div class="sjbox">
            <span class="demonstration">开始时间</span>
            <div class="demo-date-picker">
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="daterange"
                    unlink-panels
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :shortcuts="shortcuts"
                    :size="size"
                    />
                </div>
            </div>
        </div>
          <div class="sousuo"><el-button type="primary">搜索</el-button></div> 
        </div>
        <div class="tjsj"><span class="suju">共10条数据</span></div>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 95%">
            <el-table-column fixed prop="name" label="优惠券名称" width="150" />
            <el-table-column prop="manjian" label="优惠券价值" width="150" />
            <el-table-column prop="state" label="活动状态" width="140" />
            <el-table-column prop="citstartTimey" label="开始时间" width="200" />
            <el-table-column prop="endTime" label="结束时间" width="200" />
            <el-table-column prop="issued" label="已发放" width="100" />
            <el-table-column prop="USED" label="已使用" width="100" />
            <el-table-column fixed="right" label="操作" width="180">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick"
                  >查看</el-button
                >
                <el-button link type="primary" size="small">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
     import { ref } from 'vue';
     const input = ref('');
    //时间选择
     const size = ref<'' | 'large' | 'small'>('')
     const value1 = ref('')

     const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  }
]
// 表格
const handleClick = () => {
  console.log('click')
}

    const tableData = [
  {
    name: '新用户优惠卷',
    manjian: '满100减20',
    state: '进行中',
    citstartTimey: '2016-05-04',
    endTime: '2016-05-06',
    tag: 'Home',
    issued:'100',
    USED:'0'
  },{
    name: '新用户优惠卷',
    manjian: '满100减20',
    state: '进行中',
    citstartTimey: '2016-05-04',
    endTime: '2016-05-06',
    tag: 'Home',
    issued:'100',
    USED:'0'
  },{
    name: '新用户优惠卷',
    manjian: '满100减20',
    state: '进行中',
    citstartTimey: '2016-05-04',
    endTime: '2016-05-06',
    tag: 'Home',
    issued:'100',
    USED:'0'
  },]
   
   
    </script>
    <style scoped>

        template{
           margin: 0;
           padding: 0;
        }
        .PutOne{
            width: 95%;
            height: 120px;
            background-color: rgba(232, 232, 236, 0.894);
        }
        .oneputa{
            position: absolute;
            margin-left: 100px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBta{
            display: block;
            position: absolute;
            margin-left: 20px;
            margin-top: 25px;
            font-size: 14px;
        }
        .sousuo{
            width: 50px;
            position: absolute;
            margin-left: 590px;
            margin-top: 80px;
        }
        .demo-date-picker {
          display: flex;
          width: 100%;
          padding: 0;
          flex-wrap: wrap;
        }
        .demo-date-picker .block {
          padding: 30px 0;
          text-align: center;
          border-right: solid 1px var(--el-border-color);
          flex: 1;
        }
        .demo-date-picker .block:last-child {
          border-right: none;
        }
        .demo-date-picker {
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        }
        .demonstration{
            display: block;
            position: absolute;
            margin-left: -80px;
            margin-top: 35px;
            font-size: 14px;
        }
        .sjbox{
            position: absolute;
            margin-left: 100px;
            margin-top: 50px;
        }
        .tjsj{
            width: 95%;
            height: 50px;
        }
        /* 数据一共多少条 */
        .suju{
            position: absolute;
            margin-left: 350px;
            margin-top: 20px;
        }
        
</style>