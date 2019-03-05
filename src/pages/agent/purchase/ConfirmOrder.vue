<template>
  <div class="df fdc confirm">
    <div class="f1 confirm-message">
      <div
        class="address df ac jc"
        @click="onAddress"
      >
        <div class="df ac jc">
          <svg
            class="icon"
            style=""
            aria-hidden="true"
          >
            <use xlink:href="#icon-dizhi"></use>
          </svg>
        </div>
        <div
          class="df fdc"
          style="width:6.5rem;padding:0 .2rem;box-sizing:border-box"
        >
          <div class="df jsb">
            <div>收货人：李文</div>
            <div>1535623425</div>
          </div>
          <div class="ellipsis2">收货地址：广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛广东省佛上市佛上市佛上市佛上市佛上市佛上市</div>
        </div>
        <div class="df ac jc">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </div>
      <div class="bg"></div>
      <div>
        <ul class="goods-list">
          <li
            class="df"
            v-for="(item,index) in shopCarAllGoods"
            :key="index"
          >
            <div class="img-wrap">
              <img
                :src="item.imgSrc"
                alt=""
              >
            </div>
            <div class="f1 df fdc goods-message">
              <div class="ellipsis2">{{item.productIntroduction}}</div>
              <div class="df f1 afe jsb">
                <div class="price">￥{{item.unitPrice}}</div>
                <div class="num">X{{item.singleCount}}</div>
              </div>
            </div>
          </li>

        </ul>
        <ul class="other-message">
          <li class="df jsb ac">
            <span>运费</span>
            <span>0.00</span>
          </li>
          <li class="df jsb ac">
            <span>配送方式</span>
            <span>快递</span>
          </li>
          <li class="df jfa ac">
            <span>买家留言：</span>
            <input
              class="remarks f1"
              type="text"
              placeholder="选填：请填写您的要求"
            >
          </li>
          <li class="df jfe ac">
            <span style="margin-right:0.2rem">共{{settleTotal}}件商品</span>
            <span>小计:</span><span class="redtext">￥{{settlePrice}}</span>
          </li>

        </ul>
      </div>
    </div>
    <div class="confirm-count pr">
      <div class="confirm-btn pa" @click="onSubmit">提交订单</div>
      <div class="count df ac jc">共计：<span style="color:#c90000">￥{{settlePrice}}</span></div>
    </div>
    <div class="pay-wrap" ref="payWrap">
      <div class="shadow"></div>
      <div class="container">
        <p class="df ac jc pr">
          <svg
            class="icon pa"
            aria-hidden="true"
            @click="onClose"
          >
            <use xlink:href="#icon-guanbi"></use>
          </svg>
          <span>确认付款</span>
        </p>
        <div>
          <div class="pay-list df jsb ac jc">
            <span class="df ac jc">
              <svg
                class="icon"
                style="color:red"
                aria-hidden="true"
              >
                <use xlink:href="#icon-yue"></use>
              </svg>
              <span class="text">账户余额</span>
            </span>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xuanze1"></use>
            </svg>

          </div>
          <div class="pay-list df jsb ac jc">
            <span class="df ac jc">
              <svg
                class="icon"
                style="color:red"
                aria-hidden="true"
              >
                <use xlink:href="#icon-weixinzhifu"></use>
              </svg>
              <span class="text">微信支付</span>
            </span>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xuanze1"></use>
            </svg>
          </div>
        </div>

        <div class="pay-now df ac jc">立即付款</div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    onAddress() {
      this.$router.push({ path: "chooseaddress" });
    },
    onSubmit(){
      this.$refs.payWrap.style.display="block";
    },
    onClose(){
      this.$refs.payWrap.style.display="none";

    }
  },
  computed: {
    ...mapState(["shopCarAllGoods"]),
    settleTotal() {
      let total = 0;
      this.shopCarAllGoods.forEach(item => {
        total += item.singleCount;
      });
      return total;
    },
    settlePrice() {
      let total = 0;
      this.shopCarAllGoods.forEach(item => {
        total += item.singleCount * item.unitPrice;
      });
      return total;
    }
  }
};
</script>

<style lang="scss" scoped>
.confirm {
  font-size: $fs28;
  height: 100vh;
}
.confirm-count {
  height: 1rem;
  box-sizing: border-box;
  font-size: $fs34;
  background: #fff;
}
.confirm-message {
  overflow-y: auto;
  box-sizing: border-box;
}
.confirm-btn {
  width: 2.1rem;
  line-height: 0.8rem;
  background: $red;
  text-align: center;
  font-size: $fs30;
  color: #fff;
  right: 0.1rem;
  border-radius: 0.04rem;
  top: 0.1rem;
}
.count {
  height: 1rem;
  font-size: $fs34;
  color: #444;
}
.address {
  height: 1.7rem;
  background: #fff;
}
.icon {
  @include w-h(0.29rem, 0.37rem);
}
.bg {
  width: 100%;
  height: 0.1rem;
  @include w-h(100%, 0.1rem);
  background: url("./../../../../static/img/add-address.png") no-repeat;
  background-size: 100% 100%;
}
.goods-list li {
  padding: 0.2rem;
  box-sizing: border-box;
  @include w-h(100%, 2rem);
  background: #fff;
  margin-bottom: 1px;
  .price {
    color: $red;
    font-size: $fs32;
  }
  .num {
    color: #999;
    font-size: $fs28;
  }
}
.img-wrap {
  @include w-h(1.6rem, 1.6rem);
  img {
    max-height: 100%;
    max-width: 100%;
  }
}
.goods-message {
  padding-left: 0.2rem;
}
.other-message {
  margin-top: 0.13rem;
}
.other-message li {
  padding: 0 0.21rem;
  box-sizing: border-box;
  @include w-h(100%, 0.85rem);
  font-size: $fs28;
  margin-bottom: 1px;
  background: #fff;
}
.remarks {
  border: none;
  outline: none;
}
.pay-wrap {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  @include w-h(100%, 100vh);
  .shadow {
    background: $shadow;
    @include w-h(100%, 100%);
  }
  .container {
    @include w-h(100%, 50%);
    background: #fff;
    position: fixed;
    bottom: 0;
    p {
      @include border-bottom;
      height: 0.9rem;
      .icon {
        left: 0.32rem;
        top: 0.32rem;
        @include w-h(0.28rem, 0.28rem);
      }
    }
  }
}
.pay-list {
  padding: 0 0.3rem;
  height: 1.1rem;
  @include border-bottom;
  .text{
    margin-left: 0.1rem;
  }
}
.pay-now{
  @include w-h(6.9rem,0.8rem);
  background: $red;
  color: #fff;
  margin: 1rem auto;
}
</style>
