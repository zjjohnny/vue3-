<template>
    <div>
        <div>交易订单<span>(共80条)</span></div>
        <el-divider />
        <div class="PutOne">
          <span class="PutBta">订单编号</span><div class="oneputa"><el-input v-model="input" placeholder="请输入订单编号" /></div> 

          <span class="PutBtb">用户名</span><div class="oneputb"><el-input v-model="input" placeholder="请输入用户名" /></div> 

          <span class="PutBtc">收货人</span><div class="oneputc"><el-input v-model="input" placeholder="请输入收货人姓名" /></div> 

          <span class="PutBtd">联系电话</span><div class="oneputd"><el-input v-model="input" placeholder="请输入手机号码" /></div> 
          <span class="PutBte">开始时间</span><div class="onepute"><el-input v-model="input" placeholder="Please input" /></div>
          <span class="PutBtf">订单类型</span><div class="oneputf"><el-input v-model="input" placeholder="订单类型" /></div>  
          <span class="PutBtg">结束时间</span><div class="oneputg"><el-input v-model="input" placeholder="Please input" /></div>

          <div class="sousuoanniu"><el-button type="primary">搜索</el-button></div>
        </div>

        <div class="Biaogea">
            <el-tabs
               v-model="activeName"
               type="card"
               class="demo-tabs"
               @tab-click="handleClick"
             >
         <!-- 第一个 -->
      <el-tab-pane label="商品" name="first"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table>
        </el-tab-pane>
 
        <!-- 第二个 -->
    <el-tab-pane label="总价/数量" name="second"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table> 
        </el-tab-pane>

        <!-- 第三个 -->
    <el-tab-pane label="买家信息" name="third"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table>
        </el-tab-pane>
            
        <!-- 第四个 -->
        <el-tab-pane label="下单时间" name="fourth"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table>
        </el-tab-pane>
   
 
        <!-- 第五个 -->
     <el-tab-pane label="订单状态" name="firee"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
           >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table>
        </el-tab-pane>
     

        <!-- 第六个 -->
     <el-tab-pane label="贸易类型" name="sixe"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table>
        </el-tab-pane>
    

        <!-- 第七个 -->
     <el-tab-pane label="实付金额" name="svser"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 100%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="name" label="总价/数量" width="160" />
            <el-table-column prop="name" label="买家信息" width="160" />
            <el-table-column prop="name" label="下单时间" width="160" />
            <el-table-column prop="name" label="订单状态" width="160" />
            <el-table-column prop="name" label="贸易类型" width="160" />
            <el-table-column prop="name" label="实付金额" width="160" />
            </el-table>
        </el-tab-pane>
     </el-tabs>
            
        </div>
      
        
    </div>
</template>
<script lang="ts" setup>
     import { TabsPaneContext } from 'element-plus';
     import { ref } from 'vue';
   
     const input = ref('');

     const activeName = ref('first')

     const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
   };
    const tableData1 = [

       

 

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

];

    
    

   
   
    </script>
    <style scoped>

        template{
           margin: 0;
           padding: 0;
        }
        .PutOne{
            width: 95%;
            height: 180px;
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
        .oneputb{
            position: absolute;
            margin-left: 450px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBtb{
            display: block;
            position: absolute;
            margin-left: 370px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputc{
            position: absolute;
            margin-left: 800px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBtc{
            display: block;
            position: absolute;
            margin-left: 720px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputd{
            position: absolute;
            margin-left: 1250px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBtd{
            display: block;
            position: absolute;
            margin-left: 1170px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputg{
            position: absolute;
            margin-left: 450px;
            width: 200px;
            margin-top: 120px;
        } 
        .PutBtg{
            display: block;
            position: absolute;
            margin-left: 370px;
            margin-top: 126px;
            font-size: 14px;
        }
        .oneputf{
            position: absolute;
            margin-left: 800px;
            width: 200px;
            margin-top: 120px;
        } 
        .PutBtf{
            display: block;
            position: absolute;
            margin-left: 720px;
            margin-top: 126px;
            font-size: 14px;
        }
        .onepute{
            position: absolute;
            margin-left: 100px;
            width: 200px;
            margin-top: 120px;
        } 
        .PutBte{
            display: block;
            position: absolute;
            margin-left: 20px;
            margin-top: 126px;
            font-size: 14px;
        }
        .sousuoanniu{
            width: 50px;
            position: absolute;
            margin-left: 1200px;
            margin-top: 120px;
        }

        .Ddbaoti{
            float: left;
            position: absolute;
            margin-left: -40px;
        }
        .Ddbaoti li{
            display: inline-block;
            width: 140px;
            height: 44px;
            border: 1px solid rgba(180, 177, 177, 0.555);
            text-align: center;
            line-height : 44px; 
            font-size: 14px;
            cursor: pointer;
        }
       .Biaogea{
        position: relative;
        margin-top: 64px;
        /* width: 1200px; */

       }

    </style>