<template>
    <div class="goods-box">
        <h3>添加商品</h3>
        <div class="select-goods">
            <div class="select-input">
                商品编码：<el-input v-model="goodsData.goodsNum" placeholder="请输入商品标题"/>
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
            <el-button type="primary" @click="AddGood">确认添加</el-button>
        </div>
       
    </div>
  </template>
  
  <script>
  import { defineComponent, onBeforeMount,ref } from 'vue';
  import { useRoute } from 'vue-router';
  import {useStore} from 'vuex';
  import axios from 'axios';
  export default defineComponent({  
    name: 'AddGoods',
    setup(){
        const store = useStore()
        const route = useRoute();
        // const goodInfo = ref({});//存储当前拿到的商品详细信息
        const goodsData = ref({
            goodsId:0,
            goodsNum:'',
            goodsTitle:'',
            goodsCount:'',
            goodsPrice:'',
            goodsType:'',
            goodsSales: 0
        })
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
        //添加商品
        const AddGood = ()=>{
            if(goodsData.value.goodsNum == ''){
                alert('请输入商品编码');
                return
            }
            if(goodsData.value.goodsTitle == ''){
                alert('请输入商品标题')
                return
            }
            if(goodsData.value.goodsCount == ''){
                alert('请输入商品库存')
                return
            }
            if(goodsData.value.goodsPrice == ''){
                alert('请输入商品价格')
                return
            }
            if(goodsData.value.goodsType == ''){
                alert('请选择商品类型')
                return
            }
            if(goodsData.value.goodsNum != '' && goodsData.value.goodsTitle != '' && goodsData.value.goodsCount != '' 
            && goodsData.value.goodsPrice != '' && goodsData.value.goodsType != ''){
                let newData = JSON.parse(localStorage.getItem('goodslist'))
                goodsData.value.goodsId = newData.length+1;
                console.log("add",goodsData.value);
                // store.dispatch('addGoods',goodsData.value);
                newData.push(goodsData.value);
                console.log(newData);
                localStorage.setItem('goodslist',JSON.stringify(newData));
                alert("添加商品成功")
            }
            
        }
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
            AddGood
            
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