<template>
    <div class="goods-box">
        <h3>商品列表</h3>
        <div class="select-goods">
            <div class="select-input">
                商品标题：<el-input v-model="selectData.goods_title" placeholder="请输入商品标题"/>
            </div>
            <div class="select-input">
                商品编码：<el-input v-model="selectData.goods_num" placeholder="请输入商品编码" />
            </div>
            <div class="select-input">
                商品类别：
                <el-select v-model="selectData.goods_type" placeholder="全部" >
                    <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
                <!-- 商品类别：<el-input v-model="selectData.goods_num" placeholder="请输入商品编码" /> -->
            </div>
            <el-button type="primary">搜索</el-button>
        </div>
        <!-- 商品排序 -->
        <div class="sort-goods">
            <div class="select-input">
                排序方式
                <el-select v-model="selectData.goods_type" placeholder="全部" >
                    <el-option
                    v-for="item in sortOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
                <!-- 商品类别：<el-input v-model="selectData.goods_num" placeholder="请输入商品编码" /> -->
            </div>
        </div>
        <!-- 商品操作 -->
        <div class="add-goods">
            <el-button type="primary" @click="addGoods">添加商品</el-button>
            <el-button type="primary">批量上架</el-button>
            <el-button type="primary">批量下架</el-button>
        </div>
        <!-- 商品数据表格 -->
        <div class="goods-data">
            <!-- {{goodsList}} -->
            <el-table :data="goodsList" border row-class-name="goods-tab" 
            :header-cell-style="{'text-align': 'center',background: '#F4F5F8',color: '#666666',height:'50px'}"
             :cell-style="{ 'text-align': 'center' }" style="width: 100%" ref="multipleTableRef">
                <el-table-column type="selection" width="55" />
                <el-table-column prop="goodsNum" label="商品编号" width="100" />
                <el-table-column prop="" label="商品图片" width="200" >
                    <!-- <img src="http://localhost:8888" alt=""> -->
                    <template  #default="scope">
                        <img :src="'http://localhost:8888/'+scope.row.goodsImg" min-width="70" height="70"/>
                    </template>
                </el-table-column>
                
                <el-table-column prop="goodsTitle" label="商品标题" width="150" />
                <el-table-column prop="goodsCount" label="商品库存" width="120" />
                <el-table-column prop="goodsPrice" label="销售价格" width="120" />
                <el-table-column prop="goodsType" label="分类" width="120" />
                <el-table-column prop="goodsSales" label="销量" width="80"/>
                <el-table-column label="操作" >
                    <template #default="scope">
                        <el-button link type="primary"  @click="changeGoods(scope.row)">编辑</el-button>
                        <el-button link type="primary">下架</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
  </template>
  
  <script>
  import { defineComponent,  onBeforeMount } from 'vue';
  import axios from 'axios';
  import {useStore} from 'vuex';
  import {useRouter} from 'vue-router'
  import { computed } from '@vue/reactivity';
  import { ref } from 'vue'
import { ElTable } from 'element-plus'
  export default defineComponent({  
    name: 'GoodsView',
    setup(){
        // const {proxy} = getCurrentInstance()  //这样拿组件实例，相对于this
        const store = useStore();//调用useStore获取store
        const router = useRouter();//获取路由对象
        // const tableData = [];
        // 搜索字段、关键字
        const selectData = {
            goods_title:'',
            goods_num:'',
            goods_type:''
        };
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
        const sortOptions = [
            {
                value: '销量',
                label: '销量',
            },
            {
                value: '单价',
                label: '单价',
            }
        ];
        
        //vuex拿到全部商品数据
        const goodsList = computed(()=>{
            // return store.getters.allGoodsList
            return JSON.parse(localStorage.getItem('goodslist'))
        })
        // 修改商品信息
        const changeGoods=(row)=>{
            // console.log(row);
            router.push({path:'/ChangeGoods',query:{id:row.goodsId}});//路由带参跳转
            // console.log(store.state.goodsList);
        }
        // 添加商品
        const addGoods=()=>{
            router.push('/AddGoods')
        }
        onBeforeMount(()=>{
            axios.get('http://localhost:8888/getGoodsList.do')
            .then((res)=>{
                // console.log(res.data);
                store.dispatch('setGoodsList',res.data);//拿到所有商品信息，存入vuex
                
            })
        })
        return{
            selectData,typeOptions,sortOptions,
            goodsList,changeGoods,addGoods
        }
    }
  });
  </script>

<style lang="scss" scoped>
    .goods-box{
        padding-left: 20px;
        //商品搜索box
        .select-goods,.sort-goods{
            color: gray;
            font-size: 14px;
            width: 100%;
            padding: 10px 0;
            display: flex;
            // justify-content: space-around;
            .el-input,.el-select{
                width: 70%;
            }
            .select-input{
                width: 25%;
                margin-right: 10px;
            }
        }
        .add-goods{
            display: flex;
            padding: 10px;
        }

        //商品表格数据
        .goods-data{
            font-size: 16px;
            .goods-tab{
                height: 30px;
                text-align: center;
            }
            
        }

    }
    
    </style>