<template>
  <div class="settlement df fdc ">
    <div class="f1 container">
      <div class="select-all df ac jfs pr">
        <div
          class="df select-all-wrap"
          @click="selectAll"
          :class="{selected:selectedAllNum===1}"
          ref="selectAllWrap"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xuanze1"></use>
          </svg>
          <span class="all">全选</span>
        </div>

        <span
          class="pa edit"
          @click="edit"
          ref="edit"
        >编辑</span>
        <span
          class="pa finish"
          @click="finish"
          ref="finish"
        >完成</span>
      </div>
      <div
        class="delete-wrap df jfe jc ac"
        ref="deleteWrap"
        style="display: none;"
      >
        <div class="delete df jc ac">
          删除
        </div>
      </div>
      <div
        class="selected-goods"
        ref="selectedGoods"
      >
        <ul>
          <li
            v-for="(item,index) in shopCarGoods"
            :key="index"
            class="df"
          >
            <div
              class="df jc ac"
              ref="selectSingle"
              :class="{selected:selectedSingleNum===1}"
              @click="singleSelect(index,item,$event)"
            >
              <svg
                class="icon"
                aria-hidden="true"
                :class="{red:shopCarAllGoodsId.includes(item.goodsId)||selectedAllNum===1}"
              >
                <use xlink:href="#icon-xuanze1"></use>
              </svg>
            </div>
            <div class="img-wrap df jc ac">
              <img
                :src="item.imgSrc"
                alt=""
              >
            </div>
            <div
              class="f1 df fdc jsb"
              style="margin-left:0.2rem"
            >
              <div class="ellipsis2">{{item.productIntroduction}}</div>
              <div class="df jsb">
                <div class="df ac jc">￥{{item.unitPrice}}</div>
                <SimpleAddAndSub
                  class="df jc ac"
                  style="margin-right:0.2rem"
                  :count="item.singleCount"
                  :min="1"
                  @onChange="(result)=>onChangeNum(result,item)"
                ></SimpleAddAndSub>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class=" repurchase-footer df ac jsb">
      <div>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <div class="goods-num">{{settleTotal}}</div>
      </div>
      <div
        class="total df fdc"
        style="font-size:0.34rem"
      >
        <div>共计：<span style="color:#c90000">￥{{settleTotalPrice}}</span></div>
        <div style="color:#999;font-size:0.26rem">不含运费</div>
      </div>
      <div
        class="settle"
        @click="onSettle"
      >结算</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SimpleAddAndSub } from "./../../../components";
export default {
  data() {
    return {
      selectedAllNum: 0,
      selectedSingleNum: 0,
      selectIds: [],
      selectId: -1
    };
  },
  mounted() {},
  computed: {
    ...mapState(["total", "totalPrice", "shopCarGoods", "shopCarAllGoodsId","shopCarAllGoods"]),
    settleTotal(){
      let total=0;
      this.shopCarAllGoods.forEach(item=>{
        total+=item.singleCount;
      })
      return total;
    },
    settleTotalPrice(){
      let price=0;
      this.shopCarAllGoods.forEach(item=>{
        price=price+item.singleCount*item.unitPrice;
      });
      return price;
    }

  },
  components: {
    SimpleAddAndSub
  },
  methods: {
    onChangeNum(result, item) {
      if (result <= 0) {
        return;
      }
      item.singleCount = result;
      this.$nextTick(() => {
        this.$store.commit("changeShopCarListSettle", {
          dataItem: item
        });
      });
    },
    selectAll() {
      this.$store.commit("changeShopCarAllGoods");
      if (this.shopCarAllGoodsId.length) {
        this.selectedAllNum = 1;
      } else {
        this.selectedAllNum = 0;
      }
    },
    singleSelect(index, item, e) {
      this.$nextTick(() => {
        this.$store.commit("changeShopCarSingleGoods", {
          dataItem: item
        });
        if(this.shopCarAllGoodsId.length===this.shopCarGoods.length){
          this.selectedAllNum = 1;
        }else{
          this.selectedAllNum = 0;
        }

        
      });

    },
    edit() {
      this.$refs.edit.style.display = "none";
      this.$refs.finish.style.display = "block";
      this.$refs.deleteWrap.style.display = "";
    },
    finish() {
      this.$refs.edit.style.display = "block";
      this.$refs.finish.style.display = "none";
      this.$refs.deleteWrap.style.display = "none";
    },
    onSettle() {
      this.$router.push({ path: "/confirmorder" });
    }
  }
};
</script>

<style lang="scss" scoped>
.settlement {
  height: 100vh;
}
.container {
  overflow-y: auto;
  background: #fff;
}
.select-all {
  background: #fff;
  height: 0.84rem;
  border-bottom: 1px solid #ccc;
  .icon {
    width: 0.34rem !important;
    height: 0.34rem !important;
    color: #f2f1f1;
    margin-left: 0.21rem;
  }
}
.all {
  margin-left: 0.2rem;
}
.delete-wrap {
  height: 0.84rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
.delete {
  @include w-h(1.3rem, 0.54rem);
  border: 1px solid $red;
  border-radius: 0.27rem;
  color: $red;
  margin-right: 0.2rem;
}
.edit {
  right: 0.3rem;
}
.finish {
  display: none;
  right: 0.3rem;
}

.selected-goods {
  ul {
    background: #fff;
    li {
      padding: 0.25rem 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
    }
  }
  .icon {
    width: 0.34rem !important;
    height: 0.34rem !important;
    color: #f2f1f1;
    margin: 0 0.21rem;
  }
  .img-wrap {
    @include w-h(2.1rem, 1.98rem);
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
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
    background-color: $red;
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
    font-size: $fs30;
  }
  .total {
    margin-left: 1.5rem;
    div {
      text-align: right;
    }
  }
}
.selected {
  .icon {
    color: $red !important;
  }
}
.red {
  color: $red !important;
}
</style>
