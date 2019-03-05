<template>
  <div class="df fdc ac">
    <!-- 可提现金额 -->
    <div class="withdraw df fdc ac jc">
      <p class="can">可提现金额</p>
      <p class="count">3000.00</p>
    </div>
    <!-- 可提现金额 -->

    <!-- 项目 -->
    <div class="status df ">
      <div class="df fdc ac jc">
        <span class="redtext">￥0.00</span>
        <span class="gray">待结算</span>
      </div>
      <div class="df fdc ac jc">
        <span class="redtext">￥0.00</span>
        <span class="gray">提现中</span>
      </div>
      <div class="df fdc ac jc">
        <span class="redtext">￥0.00</span>
        <span class="gray">货款充值中</span>
      </div>
    </div>
    <!-- 项目 -->

    <!-- 收入-支出账单 -->
    <ul class="income-expenses">
      <li class="df jsb ac">
        <div class="income">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-shouru"></use>
          </svg>
          <span>收入账单</span>
        </div>
        <div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
      <li class="df jsb ac">
        <div class="income">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-zhichu"></use>
          </svg>
          <span>支出账单</span>
        </div>
        <div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
    </ul>
    <!-- 收入-支出账单 -->

    <!-- 提现按钮 -->
    <div class="redBtn df ac jc">
        申请提现
    </div>
    <!-- 提现按钮 -->

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.withdraw {
  @include w-h(100%,3.56rem);
  background: url("./../../../static/img/withdraw.jpg") no-repeat;
  background-size: 100% 100%;
}
.can {
  font-size: $fs28;
  color: #fff;
}
.count {
  font-size: 0.5rem;
  color: #fff;
  margin-top: 0.56rem;
}
.status {
    width: 100%;
  padding: 0.39rem 0;
  box-sizing: border-box;
  background: #fff;
  & > div {
    width: 33.33333333%;
    border-right: 1px solid #bbb;
  }
  & > div:last-child {
    border-right: none;
  }
}
.redtext {
  font-size: 0.36rem;
}
.gray {
  color: #999;
  font-size: $fs24;
}
.income-expenses {
  margin-top: 0.13rem;
  width: 100%;
  li {
    height: 1rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    background: #fff;
    .income .icon {
      @include w-h(0.32rem,0.32rem);
      margin-left: 0.1rem;
    }
  }
}
</style>
