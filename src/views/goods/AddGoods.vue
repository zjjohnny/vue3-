<template>
    <div class="goods-box">
        <h3>添加商品</h3>
        <div class="select-goods">
            <div class="select-input">
                商品编码：<el-input v-model="goodsData.goods_num" placeholder="请输入商品标题"/>
            </div>
            <div class="select-input">
                商品标题：<el-input v-model="goodsData.goodsTitle" />
            </div>
            <div class="select-input">
                商品库存：<el-input v-model="goodsData.goodsCount" />
            </div>
            <div class="select-input">
                商品价格：<el-input v-model="goodsData.goodsPrice" />
            </div>
            <div class="select-input">
                商品类别：
                <el-select v-model="goodsData.goodsType" placeholder="全部" >
                    <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
                <!-- 商品类别：<el-input v-model="selectData.goods_num" placeholder="请输入商品编码" /> -->
            </div>
            <el-button type="primary">确认添加</el-button>
        </div>
       
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onBeforeMount,ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  export default defineComponent({  
    name: 'AddGoods',
    setup(){
        const route = useRoute();
        // const goodInfo = ref({});//存储当前拿到的商品详细信息
        const goodsData = {
            goods_num:'',
            goodsTitle:'',
            goodsCount:'',
            goodsPrice:'',
            goodsType:'',
        }
        //商品类别
        const typeOptions = [
            {
                value: '服饰',
                label: '服饰',
            },
            {
                value: '手机',
                label: '手机',
            },
            {
                value: '家居',
                label: '家居',
            }
        ];
        onBeforeMount(()=>{
            // console.log(route.query.id);
            // axios.get("http://localhost:8888/getGoodInfo.do?id="+route.query.id)
            // .then((res)=>{
            //     console.log(res);
            //     goodInfo.value = res.data[0]
            // })
            
        })
        return{
            typeOptions,goodsData,
            
        }
    }
  });
  </script>

<style lang="scss" scoped>
    .goods-box{
        padding-left: 20px;
        //商品搜索box
        .select-goods{
            color: gray;
            font-size: 14px;
            width: 100%;
            padding: 10px 0;
            display: flex;
            flex-wrap: wrap;
            .el-input,.el-select{
                width: 70%;
                margin-bottom: 10px;
            }
            .select-input{
                width: 25%;
                margin-right: 10px;
            }
        
        }
    }
    
</style>