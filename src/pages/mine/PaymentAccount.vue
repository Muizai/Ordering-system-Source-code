<template>
  <div class="df fdc ac">


    <!-- 可提现金额 -->
    <div class="withdraw df fdc ac jc">
      <p class="can">货款余额</p>
      <p class="count">3000.00</p>
    </div>
    <!-- 可提现金额 -->

    <!-- 收入-支出账单 -->
    <ul class="income-expenses">
      <li
        class="df jsb ac"
        v-for="(item,index) in List"
        :key="index"
        @click="onList(item.path)"
      >
        <div class="income">
          <svg
            class="icon"
            aria-hidden="true"
            style="width:0.3rem;height:0.33rem"
          >
            <use :xlink:href="item.icon"></use>
          </svg>
          <span>{{item.text}}</span>
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
    <router-link tag="div" class="redBtn df ac jc" to="recharge" >
      申请提现
    </router-link>
    <!-- 提现按钮 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        { icon: "#icon-chongzhi1", text: "货款账单", path: "paymentbill" },
        {
          icon: "#icon-chongzhi3",
          text: "线下货款充值",
          path: "offlinerecharge"
        },
        { icon: "#icon-chongzhi2", text: "收入货款充值", path: "" },
        { icon: "#icon-chongzhi", text: "下级货款充值", path: "" }
      ]
    };
  },
  methods: {
    onList(path) {
      this.$router.push({ path: path });
    }
  }
};
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
  font-size: $fs36;
}
.gray {
  color: #999;
  font-size: $fs24;
}
.income-expenses {
  margin-top: 0.13rem;
  width: 100%;
  color: #444;
  .icon {
    color: #444;
  }
  li {
    height: 1rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    background: #fff;
    @include border-bottom;
    .income .icon {
      @include w-h(0.32rem,0.32rem);
      margin-left: 0.1rem;
    }
  }
}
</style>
