import Vue from 'vue'
import Vuex from 'vuex'
import router from './../router'
import { stat } from 'fs';
Vue.use(router);
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        tabList: [
            "畅销爆品系列",
            "VC系列",
            "护肤系列",
            "防晒系列",
            "山竹系列",
            "彩妆系列",
            "养护系列",
            "24k系列",
            "紫苏系列",
            "礼盒系列",
            "洗护用品系列",
            "单品系列"
        ],
        // 把所有系列选中的放进这个对象
        shopCarList: {},
        total: 0, // 购物车商品数量
        goodsList: [],// 每页初始化的商品
        totalPrice: 0,// 购物车商品总价
        shopCarGoods: [], // 购物车中的商品
        shopCarAllGoodsId: [],//勾选的商品id
        shopCarAllGoods: [],//勾选的商品



    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        changeShopCarList(state, { dataItem, series }) {
            state.shopCarList[series] ? "" : state.shopCarList[series] = [];
            state.shopCarList[series] = state.shopCarList[series].filter(v => v.goodsId !== dataItem.goodsId);// 去重
            state.shopCarList[series].push(dataItem);
            for (var key in state.shopCarList) {
                state.shopCarList[key].forEach(item => {
                    state.shopCarGoods = state.shopCarGoods.filter(v => v.goodsId !== item.goodsId);
                    state.shopCarGoods.push(item);
                })
            }
        },
        changeShopCarSingleGoods(state, { dataItem }) {
            if (state.shopCarAllGoodsId.includes(dataItem.goodsId)) {
                state.shopCarAllGoodsId = state.shopCarAllGoodsId.filter(v => v !== dataItem.goodsId);
                state.shopCarAllGoods = state.shopCarAllGoods.filter(v => v !== dataItem);


            } else {
                state.shopCarAllGoodsId.push(dataItem.goodsId);
                state.shopCarAllGoods.push(dataItem);
            }
        },
        changeShopCarAllGoods(state){
            if(state.shopCarAllGoodsId.length===state.shopCarGoods.length){
                state.shopCarAllGoodsId=[];
                state.shopCarAllGoods=[];
            }else{
                state.shopCarGoods.forEach(item=>{
                    state.shopCarAllGoodsId=state.shopCarAllGoodsId.filter(v=>v!==item.goodsId);
                    state.shopCarAllGoodsId.push(item.goodsId);
                    state.shopCarAllGoods=state.shopCarAllGoods.filter(v=>v!==item);
                    state.shopCarAllGoods.push(item);

                });
            }
            console.log(state.shopCarAllGoods);
        },
        changeShopCarListSettle(state, { dataItem }) {
            for (let key in state.shopCarList) {
                state.shopCarList[key].forEach(item => {
                    if (item.goodsId === dataItem.goodsId) {
                        item.singleCount = dataItem.singleCount;
                    }
                    state.shopCarGoods = state.shopCarGoods.filter(v => v.goodsId !== item.goodsId);
                    state.shopCarGoods.push(item);
                })
                state.shopCarList[key].forEach(item => {
                    state.shopCarGoods = state.shopCarGoods.filter(v => v.goodsId !== item.goodsId);
                    state.shopCarGoods.push(item);
                })
            }
            this.commit('changeTotal');

        },
        changeTotal(state) {
            let total = 0;
            let totalPrice = 0;
            for (var key in state.shopCarList) {
                state.shopCarList[key].forEach(item => {
                    total += item.singleCount;
                    totalPrice += item.singleCount * item.unitPrice;
                })
            }
            state.total = total;
            state.totalPrice = totalPrice;
        },
        get(state, { data }) {
            state.goodsList = data;
        }

    },
    actions: {
        getGoodsList(context, { index }) {
            axios.get(`/api/getCategoryGoods?categoryId=${index}`).then(res => {
                const { status, data } = res.data;
                if (status === 0) {
                    context.commit("get", { data: data });
                    // 系列名称
                    const seriesName = context.state.tabList[index];
                    // 购物车各系列商品
                    const tabListSeries = context.state.shopCarList[seriesName];
                    if (tabListSeries) {
                        tabListSeries.forEach(itemTab => {
                            context.state.goodsList.forEach(item => {
                                if (itemTab.goodsId === item.goodsId) {
                                    item.singleCount = itemTab.singleCount;
                                }
                            })
                        })

                    }
                }
            })

        }
    }
})