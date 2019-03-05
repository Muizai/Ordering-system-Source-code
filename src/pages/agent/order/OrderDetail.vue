<template>
  <div class="order-detail df fdc pr">
    <div class="container f1">
      <div class="order-status whitetext df jc ac jsb">
        <div class="">等待买家上传付款凭证</div>
        <div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-bianji"></use>
          </svg>
        </div>
      </div>

      <!-- 收货信息 start -->
      <div class="address df">
        <div class="df jc ac">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-dizhi"></use>
          </svg>
        </div>

        <div
          class="df fdc jc"
          style="margin-right:.2rem"
        >
          <div class="df jsb">
            <span>收货人：李文</span>
            <span>13751256895</span>
          </div>
          <div>收货地址：广东省佛上市佛上市佛上市佛上市佛上市佛上市</div>
        </div>
      </div>
      <!-- 收货信息 end -->

      <!-- 订单详情 start -->
      <div class="detail">
        <div class="df jsb jc ac seller">
          <div class="seller-wrap">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-dianpu"></use>
            </svg>

            <span>商家名称</span>
          </div>

          <div class="df jc ac phone ">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-phone"></use>
            </svg>
            <span>联系卖家</span>
          </div>
        </div>
        <div class="df goods-info">
          <div class="img-wrap">
            <img
              src="./../../../../static/img/product.jpg"
              alt=""
            >
          </div>
          <div class="f1">
            <div
              class="ellipsis2"
              style="margin-left:0.3rem"
            >面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜</div>
          </div>
          <div class="df fdc afe">
            <span>￥180</span>
            <span>x1</span>
          </div>

        </div>
        <div class="price">
          <p
            class="df jsb"
            style="color:#777;"
          ><span>商品总价：</span><span>￥180.00</span></p>
          <p
            class="df jsb"
            style="color:#777;"
          ><span>运费：</span><span>￥0.00</span></p>
          <p
            class="df jsb"
            style="color:#444"
          ><span>实付款：</span><span style="color:#c90000;">￥180.00</span></p>
        </div>
        <div class="price remarks"><span>买家留言：无</span></div>
        <div class="df jsb price"><span>支付方式</span><span>支付宝</span></div>
        <div class="price-wrap">
          <p class="df jsb"><span>订单编号：20180508175534001194</span><span class="copy df jc ac">复制</span></p>
        </div>

      </div>
    </div>
    <!-- 订单详情 end -->

    <!-- 操作 start -->
    <div class="operating df ac jfe">
      <div>上传凭证</div>
      <div @click="onToast">确认收货</div>

    </div>
    <!-- 操作 end -->

    <!-- 提示 start -->
    <div
      ref="toast"
      class="toast pa pr"
    >
      <div class="shadow"></div>
      <div class="container-wrap pa df jc">
        <div class="container df fdc jc ac">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xuanze1"></use>
          </svg>
          <p>确认收货成功</p>
        </div>
      </div>

    </div>
    <!-- 提示 end -->

  </div>
</template>

<script>
export default {
  methods: {
    onToast() {
      this.$refs.toast.style.display = "block";
      let _this = this;
      setTimeout(() => {
        _this.$refs.toast.style.display = "none";
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.order-detail {
  height: 100vh;
}
.order-status {
  height: 1.59rem;
  background: #ff5656;
  & div:first-child {
    margin-left: 0.5rem;
  }
  .icon {
    @include w-h(0.87rem, 0.94rem);
    margin-right: 0.63rem;
  }
}

.address {
  height: 1.82rem;
  background: #fff;
  .icon {
    @include w-h(0.29rem, 0.37rem);
    margin: 0 0.28rem;
  }
}
.detail {
  margin-top: 0.13rem;
}
.container {
  overflow-y: auto;
}
.operating {
  height: 1rem;
  background: #fff;
  div {
    @include w-h(1.98rem, 0.62rem);
    line-height: 0.62rem;
    border: 1px solid $red;
    color: $red;
    text-align: center;
    margin-right: 0.24rem;
  }
}
p {
  line-height: 0.4rem;
}
.seller {
  height: 0.9rem;
  background: #fff;
  .icon {
    @include w-h(0.34rem, 0.3rem);
  }
}
.phone {
  margin-right: 0.2rem;
  color: $red;
  .icon {
    @include w-h(0.34rem, 0.3rem);
    margin-right: 0.1rem;
  }
}
.goods-info {
  background: #fefcfc;
  padding: 0.3rem;
  box-sizing: border-box;
  .img-wrap {
    @include w-h(1.82rem, 1.82rem);
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
.price {
  background: #fff;
  padding: 0.25rem;
  box-sizing: border-box;
}
.seller-wrap {
  margin-left: 0.23rem;
}
.price-wrap {
  font-size: $fs22;
  padding: 0.2rem;
  box-sizing: border-box;
  background: #fff;
  margin-top: 0.13rem;
  color: #999;
  .copy {
    @include w-h(0.86rem, 0.34rem);
    border: 1px solid #999;
    border-radius: 0.02rem;
    text-align: center;
  }
}
.remarks {
  margin-top: 0.13rem;
  border-bottom: 1px solid #ccc;
}
.toast {
  display: none;
  @include w-h(100%, 100vh);
  top: 0;
  .container-wrap {
    width: 100%;
    top: 30vh;
  }
  .shadow {
    background-color: $shadow;
    @include w-h(100%, 100%);
  }
  .container {
    @include w-h(3.94rem, 2.42rem);
    border-radius: 0.1rem;
    background: #fff;
    .icon {
      @include w-h(0.64rem, 0.64rem);
      color: $red;
    }
    p {
      margin-top: 0.3rem;
      color: #666;
      font-size: $fs32;
    }
  }
}
</style>
