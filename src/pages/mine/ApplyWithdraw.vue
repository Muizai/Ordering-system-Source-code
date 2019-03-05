<template>
  <div class="applywithdraw df fdc">
    <div class="header-wrap df ac">
      <div class="header df jsb ac">
        <div class="df jsb ac">
          <svg
            class="icon zhifubao"
            aria-hidden="true"
          >
            <use xlink:href="#icon-umidd17"></use>
          </svg>
          <span>13562489552</span>
        </div>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-arrowright"></use>
        </svg>

      </div>
    </div>
    <div class="f1 container-wrap">
      <div class="container ">
        <p class="text">提现金额</p>
        <div class="amount df ac">
          <span>￥</span>
          <input type="text" class="f1">
        </div>
        <div class="operating df jsb">
          <span class="can">可提现金额</span>
          <span class="redtext">全部提现</span>
        </div>
      </div>
      <div class="redBtn df ac jc">申请提现</div>

    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-wrap {
  height: 1.25rem;
  background: #f5f5f5;
}
.header {
  background: #fff;
  @include w-h(100%,1rem);
  font-size: $fs30;
  color: #444;
  padding: 0 0.2rem;
}
.applywithdraw {
  background: #fff;
  height: 100vh;
}
.zhifubao {
  @include w-h(0.38rem,0.38rem);
  margin-right: 0.05rem;
}
.container-wrap {
  padding: 0 0.2rem;
}
.amount {
  border-bottom: 1px solid #eaeaea;
  span {
    font-size: 0.48rem;
    color: #444;
  }
  input {
    height: 1rem;
  }
}
.text {
  color: #777;
  font-size: $fs28;
  margin-top: 0.28rem;
}
.operating {
  line-height: 0.8rem;
  @include border-bottom;
  .can {
    font-size: $fs24;
    color: #999;
  }
}
.redBtn{
    width: 100%;
}
</style>
