<template>
    <div>
        <el-container>
            <el-header>
                <div class="fontBox">国家管理</div>
                <hr>
            </el-header>
            <el-main>
                <div>
                    <el-form :model="form" label-width="200px">
                        <el-form-item label="搜索国家">
                            <el-col :span="6"><el-input v-model="form.time5" placeholder="请输入国家名称"/></el-col>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">添加国家</el-button>
                        </el-form-item> 
                    </el-form>
                </div>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :row-class-name="tableRowClassName"
                >
                    <el-table-column prop="date" label="国家名称" width="400" />
                    <el-table-column prop="name" label="商品数量" width="400" />
                    <el-table-column prop="address" label="操作"  width="400" />
                </el-table>
            </el-main>
        </el-container>

    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const form = reactive({
  name: '',
  time: '',
  time1: '',
  time2: '',
  time3: '',
  time4: '',
  time5: '',
  region1: '',
  region2: '',
  region3: '',
  time6: '',
  desc: '',
})



const onSubmit = () => {
  console.log(form)
}
interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style lang="scss" scoped>
    .fontBox{
        font-size: 20px;
        text-align: left;
        height: 60px;
        line-height: 60px;
    }
    
</style>