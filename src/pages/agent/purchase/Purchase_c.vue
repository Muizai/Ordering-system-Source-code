<template>
  <div class="purchase">
    <div class="container" ref="container">
      <div class="listWrap" ref="listWrap">
        <div class="listItem" v-for="(item,index) in tabList" :key="index" @click="onItemClick(index,$event)" :class="{red:itemSelected==index}">{{item}}</div>
        <div class="scrollBar" :style="{left:scrollBarLeft,width:scrollBarWidth}"></div>
      </div>
    </div>
    <div class="goods">
      <ul>
        <li v-for="(item,index) in goodsList" :key="index" class="df">
          <div class="imgWrap df jc ac"><img :src="item.imgSrc"></div>
          <div class="product-message f1 df fdc jsb">
            <div class="goodsName ellipsis2"> {{item.productIntroduction}} </div>

            <div class="goodsInfo df fdc">
              <!-- 底部左边部分 -->
              <div class="goodsInfoTop">
                <!-- 价格 -->
                <div class="goodsPrice"> ￥{{item.unitPrice}} </div>
              </div>

              <div class="goodsInfoBottom df jsb">
                <!-- 库存 -->
                <div class="df fdc jfe"> 库存：{{item.goodsInventory}}箱 </div>
                <!-- 低耦合， 高内聚 -->
                <!-- 加减器 -->
                <!-- <SimpleAddAndSub @onChangeCount="( result ) => modify( result, index )" :minCount="1" :maxCount="5" :count="item.singleCount"></SimpleAddAndSub> -->
                <SimpleAddAndSub @onChange="(result)=>modify(result,index)" :count='item.singleCount'></SimpleAddAndSub>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="add-shopCar df jsb ac">
      <div class="add-num">
        <!-- <i class="icon iconfont icon-gouwuche"></i> -->
        <!-- <svg style="width: .3rem; height:.3rem" class="iconfont icon-weibiaoti-_huabanfuben"></svg> -->
        <svg class="icon" aria-hidden="true" style="width: 0.5rem;height:0.5rem;color:#949494;">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>

        <span class="num">{{total}}</span>
      </div>
      <div class="df ac">
        <div class="total">
          <p class="total-price">共计：<span>￥2333</span></p>
          <p class="n-fare df jfe">不含运费</p>
        </div>
        <div class="settle df jc ac">结算</div>
      </div>
    </div>

  </div>
</template>
<script>


import { SimpleAddAndSub } from './../addAndSubDevices'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      tabList: [
        '畅销爆品系列',
        'VC系列',
        '护肤系列',
        '防晒系列',
        '山竹系列',
        '彩妆系列',
        '养护系列',
        '24k系列',
        '紫苏系列',
        '礼盒系列',
        '洗护用品系列',
        '单品系列'
      ],
      scrollBarWidth: 0,
      scrollBarLeft: 0,
      itemSelected: 0,
      goodsList: []
    }
  },
  mounted() {
    // console.log(this.$refs.listWrap.firstElementChild)
    let firstItem = this.$refs.listWrap.firstElementChild
    this.scrollBarWidth = `${firstItem.offsetWidth}px`
    this.scrollBarLeft = `${firstItem.offsetLeft}px`
    this.$router.replace({ path: '/purchase?index=0' })

    // this.getGoodsList(0)
    // console.log(this.shopCarList)
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    shopCarList() {
      return this.$store.state.shopCarList;
    },
    total(){
      let total = 0;
      console.log( this.$store.state.shopCarList );
      this.$store.state.shopCarList.forEach( item => total += item.singleCount);
      return total;
    }
  },
  methods: {
    onItemClick(index, e) {
      const { offsetWidth, offsetLeft, clientWidth } = e.target
      this.scrollBarWidth = `${offsetWidth}px`
      this.scrollBarLeft = `${offsetLeft}px`
      this.itemSelected = index
      $(this.$refs.container).animate({
        scrollLeft: offsetLeft - window.innerWidth / 2 + clientWidth / 2
      })
      const { path, query } = this.$route
      this.$router.replace({ path, query: { ...query, index } })
      // this.$router.replace({path,query:{}})

      // 一条历史记录， 当前路由上加了一条当前路由的历史记录， 改了路由参数；
      console.log(this.$route.query)
    },
    startMove(distance) {
      let _distance = this.$refs.container.scrollLeft
      let count = 0
      if (_distance > distance) {
        // 滚动条往左
        count = -10
        console.log('滚动条往左')
      } else {
        // 滚动条往右
        count = 10
        console.log('滚动条往右')
      }
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.$refs.container.scrollTo(_distance, 0)
        _distance = _distance + count
        if (
          (_distance >= distance && count > 0) ||
          (_distance <= distance && count < 0)
        ) {
          clearInterval(this.timer)
        }
      }, 20)
    },
    modify(result, subIndex) {
      console.log('父组件第' + subIndex + '条数据拿到count， 值为：', result)
      /*
        1. 首先由个数组 ： []
        2. 当count 改变的时候， 如果count > 0, 则在商品列表数据里面找到这条数据， 放到 （1） 的数组中。 如果count === 0 就在 （1） 的数组中进行查找当前的数据， 找到后清除掉
        3. 购物车 总数， 可以使用计算属性， 计算 （1） 的数组里面所有 count 累积和

      */
      // if (this.goodsList[subIndex].singleCount === 0) {
      //   // .... vuex 我觉得你还得再看。。。
      //   this.shopCarList.push(this.goodsList[subIndex])
      // }
      // for (let i = 0; i < this.shopCarList.length; i++) {
      //   // 这里不要赋值
      //   this.total += this.shopCarList[i].singleCount

      // }
      // console.log(this.shopCarList);


      // 数据变更， 数据变了（同步）， 要引起 视图更新相对于数据变更一定是（异步）。 最耗性能的， 就是UI的渲染
      this.goodsList[subIndex].singleCount = result;
      // this.goodsList[subIndex].productIntroduction = 'w ai huang xiao ling';
      // this.goodsList[subIndex].unitPrice = '1314520';
      // this.goodsList[subIndex].goodsInventory = 666;
      // this.goodsList[subIndex].imgSrc = 'xxx.jpg';

      this.$nextTick( () => {
        // 执行的时候， 是在数据变更， 视图更新完毕后
        this.$store.commit('changeShopCarList', { dataItem: this.goodsList[subIndex] })        
      } )


/* 
 goodsId: guid(),
  productIntroduction: item.repeat(50),
  unitPrice: 233,
  goodsInventory: 888,
  singleCount: 0,
  imgSrc: 'https://ss3


*/



      // 发一个动作， 存储 当前的这个数据对象， 
      
      // 我们 让 vuex 里面的 state 存储 数据对象这个商品

      // 我 让   1 =》 你 =》 存

      // this.$store.commit('存钱', 1)  动作/命令 
      // this.$store.commit('changeShopCarList', { dataItem: this.goodsList[subIndex] })
    },
    getGoodsList(index) {
      axios.get('/api/getCategoryGoods?categoryId=' + index).then(res => {
        const { status, data } = res.data
        if (status === 0) {
          // console.log( data )
          this.goodsList = data
        }
      })
    }
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.query.index !== oldValue) {
        // 切换了 tab, 切换了分类， 请求对应的接口
        this.getGoodsList(newValue.query.index)
        // alert( newValue.query.index )
      }
    }
  },
  components: {
    SimpleAddAndSub
  }
}
</script>
<style lang="scss" scoped >
.purchase {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.28rem;
}
.container {
  overflow-x: scroll;
  background: #fff;
  /* height: 0.9rem; */
}
.container::-webkit-scrollbar {
  display: none;
}
.listWrap {
  font-size: 0.28rem;
  white-space: nowrap;
  position: relative;
  height: 100%;
}

.listItem {
  display: inline-block;
  margin: 0 0.12rem;
  line-height: 0.88rem;
}
.scrollBar {
  width: 1rem;
  position: absolute;
  bottom: 0;
  height: 0.02rem;
  background: red;
  transition: 0.3s all;
}
.red {
  color: red;
}
.goods {
  flex: 1;
  overflow-y: auto;
  li {
    background-color: #fff;
    margin-top: 0.01rem;
    padding: 0.2rem;
  }
}
.product-message {
  margin-left: 0.22rem;
  padding: 0.1rem 0;
}

.imgWrap {
  width: 2.1rem;
  height: 2.1rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.goodsName {
  font-size: 0.28rem;
  word-break: break-all;
  line-height: 0.4rem;
}
.goodsInfo {
  .goodsInfoTop {
    .goodsPrice {
      color: #c90000;
      font-size: 0.32rem;
      text-align: left;
    }
  }
}
.goodsInfoBottom {
  & > div:first-child {
    color: #999999;
    font-size: 0.24rem;
  }
  .add-reduce {
    .add,
    .reduce {
      width: 0.54rem;
      height: 0.54rem;
      color: #999;
      font-size: 0.48rem;
      background-color: #f1f1f1;
    }

    .single-count {
      width: 0.7rem;
      height: 0.54rem;
      background-color: #f1f1f1;
      margin: 0 0.03rem;
    }
  }
}
.add-shopCar {
  padding: 0.1rem;
  border-top: 1px solid #e3e3e3;
}
.add-num {
  margin-left: 0.28rem;
  position: relative;
}
.num {
  position: absolute;
  right: 0.1rem;
  top: 0;
  transform: translateX(100%);
  background-color: #c90000;
  border-radius: 0.16rem;
  color: #fff;
  padding: 0.05rem;
}
.settle {
  width: 2.1rem;
  height: 0.8rem;
  border-radius: 0.04rem;
  background-color: #c90000;
  color: #fff;
  font-size: 0.3rem;
}
.total {
  color: #444;
  font-size: 0.34rem;
  margin-right: 0.4rem;
}
.total-price span {
  color: #c90000;
}
.n-fare {
  font-size: 0.26rem;
}
</style>
