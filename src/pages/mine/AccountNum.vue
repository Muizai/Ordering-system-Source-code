<template>
  <div class="accountnum">
    <ul>
      <li class="df jsb ac">
        <div>
          <svg
            class="icon wechat"
            aria-hidden="true"
          >
            <use xlink:href="#icon-weixin1"></use>
          </svg>
          <span>添加微信收款账户</span>
        </div>
        <svg
          class="icon add"
          aria-hidden="true"
          style="color:#888"
        >
          <use xlink:href="#icon-tianjia1"></use>
        </svg>
      </li>
      <li class="df jsb ac">
        <div>
          <svg
            class="icon wechat zfbpay"
            aria-hidden="true"
          >
            <use xlink:href="#icon-umidd17"></use>
          </svg>
          <span>添加支付宝收款账户</span>
        </div>
        <svg
          class="icon add"
          aria-hidden="true"
          style="color:#888"
        >
          <use xlink:href="#icon-tianjia1"></use>
        </svg>
      </li>
      <li class="df jsb ac">
        <div>
          <svg
            class="icon wechat cart"
            aria-hidden="true"
          >
            <use xlink:href="#icon-yinhangqia"></use>
          </svg>
          <span>添加银行卡收款账户</span>
        </div>
        <svg
          class="icon add"
          aria-hidden="true"
          style="color:#888"
        >
          <use xlink:href="#icon-tianjia1"></use>
        </svg>
      </li>

    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.accountnum {
  li {
    margin-top: 0.13rem;
    font-size: $fs30;
    padding-left: 0.3rem;
    background: #fff;
    height: 1rem;
    .add {
      @include w-h(0.36rem, 0.36rem);
      margin-right: 0.3rem;
    }
    .wechat {
      @include w-h(0.38rem, 0.31rem);
      color: #56c16d;
    }
    .zfbpay {
      @include w-h(0.38rem, 0.38rem);
    }
    .cart {
      @include w-h(0.38rem, 0.28rem);
    }
  }
}
</style>
