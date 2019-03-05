<template>
  <div class="repurchase df fdc pr">
    <div class="choose-wrap">
      <div class="shadow"></div>
      <div class="container pa df fdc ac jc">
        <div class="df ac jc">
          <span>Ray</span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-htmal5icon03"></use>
          </svg>
        </div>
        <div class="df ac jc">
          <span>Ray</span>
        </div>
        <div class="df ac jc">
          <span>ATREUS</span>
        </div>
        <div class="df ac jc">
          <span>LANNA</span>
        </div>
      </div>
    </div>

    <div class="brand-choose df ac jc">
      <div>
        <span>Ray</span>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-htmal5icon03"></use>
        </svg>
      </div>
    </div>

    <div class="f1 center">
      <ul>
        <li
          class="df"
          v-for="(item,index) in goodsList"
          :key="index"
        >
          <div class="img-wrap df jc ac">
            <img
              :src="item.imgSrc"
              alt=""
            >
          </div>
          <div class="produce-message f1 df fdc jsb">
            <div class="goods-Name ellipsis2">{{item.productIntroduction}}</div>
            <div class="goods-price">￥{{item.unitPrice}}</div>
            <div class="inventory df jsb">
              <div class="df jc ac">库存：{{item.goodsInventory}}箱</div>
              <SimpleAddAndSub
                :count="item.singleCount"
                @onChange="(result)=>onChangeNum(result,index)"
              ></SimpleAddAndSub>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="repurchase-footer df jsb ac ">
      <div>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <div class="goods-num ">{{total}}</div>
      </div>
      <div
        class="total df fdc "
        style="font-size:0.34rem"
      >
        <div>共计：<span style="color:#c90000">￥{{totalPrice}}</span></div>
        <div style="color:#999;font-size:0.26rem">不含运费</div>
      </div>
      <div
        class="settle"
        @click="toSettle"
      >结算</div>
    </div>
  </div>
</template>
<script>
import { SimpleAddAndSub } from "./../../../components";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
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
      itemSelected: 0,
      scrollBarLeft: 0,
      scrollBarWidth: 0
    };
  },
  mounted() {
    // this.$router.replace({ path: "/rwpurchase?index=0" });
    // let firstItem = this.$refs.listWrap.firstElementChild;
    // this.scrollBarLeft = `${firstItem.offsetLeft}px`;
    // this.scrollBarWidth = `${firstItem.offsetWidth}px`;
    this.getList({ index: 0 });
    let abc = "abc";
  },
  methods: {
    ...mapActions({
      getList: "getGoodsList"
    }),
    onItemClick(index, e) {
      const { path, query } = this.$route;
      this.$router.replace({ path, query: { ...query, index } });
      this.itemSelected = index;
      const { offsetWidth, offsetLeft, clientWidth } = e.target;
      this.scrollBarLeft = `${offsetLeft}px`;
      this.scrollBarWidth = `${offsetWidth}px`;
      $(this.$refs.container).animate({
        scrollLeft: offsetLeft - window.innerWidth / 2 + clientWidth / 2
      });
      // 获取每个系列可选的商品
      this.getList({ index: index });
      // 该系列选中的商品的数组
      let shopCarListItem = this.$store.state.shopCarList[this.seriesName];
    },
    onChangeNum(result, index) {
      this.$store.state.goodsList[index].singleCount = result;
      this.$nextTick(() => {
        this.$store.commit("changeShopCarList", {
          dataItem: this.$store.state.goodsList[index],
          index: index,
          series: this.seriesName
        });
        this.$store.commit("changeTotal");
      });
    },
    toSettle() {
      this.$router.push({ path: "/settlement" });
    }
  },
  computed: {
    ...mapState(["shopCarList", "total", "goodsList", "totalPrice"]),
    seriesName() {
      return this.tabList[this.$route.query.index];
    }
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.query.index !== oldValue) {
        this.$store.commit("changeTotal");
      }
    }
  },
  components: {
    SimpleAddAndSub
  }
};
</script>
<style lang="scss" scoped>
.choose-wrap {
  display: none;
  @include w-h(100%, 100vh);
  position: absolute;
  .shadow {
    @include w-h(100%, 100%);
    background: $shadow;
  }
  .container {
    top: 0;
    background: #fff;
    width: 100%;
    & > div {
      @include border-bottom;
      @include w-h(100%, 0.99rem);
    }
    .icon {
      color: #c90000;
      margin-left: 0.05rem;
      @include w-h(0.32rem, 0.18rem);
    }
  }
}
.brand-choose {
  height: 0.84rem;
  font-size: $fs30;
  background: #fff;
  @include border-bottom;
  span {
    vertical-align: middle;
  }
  .icon {
    color: #c90000;
    @include w-h(0.32rem, 0.18rem);
    vertical-align: middle;
    margin-left: 0.05rem;
  }
}
.repurchase {
  width: 100%;
  height: 100%;
  @include w-h(100%, 100%);
  font-size: $fs28;
}
.center {
  height: 20rem;
  overflow-y: auto;
  .img-wrap {
    @include w-h(2.1rem, 2.06rem);
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .produce-message {
    margin-left: 0.22rem;
  }
}
.center li {
  padding: 0.2rem;
  background: #fff;
  @include border-bottom;
}

.repurchase-footer {
  height: 1rem;
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  .icon {
    @include w-h(0.5rem, 0.49rem);
  }
  & div:first-child {
    position: relative;
    margin-left: 0.38rem;
  }
  .goods-num {
    position: absolute;
    top: -0.1rem;
    right: 0.1rem;
    transform: translateX(100%);
    background-color: $red;
    border-radius: 0.16rem;
    padding: 0.05rem;
    color: #fff;
  }
  .settle {
    @include w-h(2.1rem, 0.8rem);
    background-color: #c90000;
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
    font-size: $fs30;
  }
  .total {
    margin-left: 1.5rem;
    font-size: $fs34;
    div {
      text-align: right;
    }
  }
}
.isred {
  color: $red;
}
.goods-name {
  font-size: $fs28;
  word-break: break-all;
  line-height: 0.4rem;
}
.goods-price {
  font-size: $fs32;
  color: red;
  text-align: left;
}
.inventory {
  font-size: $fs24;
  color: #999;
}
</style>
