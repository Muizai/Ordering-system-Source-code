<template>
  <div class="account df fdc ac">
    <div
      class="accoun-type df fdc"
      v-for="(item,index) in accountList"
      :key="index"
    >
      <div
        class="container df ac jsb"
        :style="item.bgColor"
      >
        <div class="df ">
          <div class="df jc ac icon-wrapper">
            <svg
              class="icon"
              aria-hidden="true"
              :style="item.iconStyle"
            >
              <use :xlink:href="item.icon"></use>
            </svg>
          </div>
          <div class="df fdc jc account-num">
            <p>{{item.name}}</p>
            <p v-if="index===0">微信收款账户</p>
            <p v-if="index===1">支付宝收款账户:{{item.zhifubaoAccount}}</p>
            <p
              v-if="index===2"
              class="bank-card"
              style=""
            >银行卡收款账户:{{item.bankCard}}</p>
          </div>
        </div>
        <div
          class="qrcode-wrapper"
          v-if="item.imgSrc"
        >
          <img
            :src="item.imgSrc"
            alt=""
          >
        </div>
      </div>
      <div class="operating df f1 ac jc">
        <div
          class="f1 df jc ac edit"
          @click="changePath"
        >编辑</div>
        <div class="f1 df jc ac">删除</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      accountList: [
        {
          name: "微信",
          imgSrc: "./../../../static/img/follow-qrcode.jpg",
          icon: "#icon-weixin1",
          iconStyle: "color:#56c16d;width:0.49rem;height:0.49rem",
          bgColor: "background:#56c16d"
        },
        {
          name: "支付宝",
          account: "13452658556",
          icon: "#icon-umidd17",
          iconStyle: "width:0.49rem;height:0.49rem",
          bgColor: "background:#06a2f7",
          zhifubaoAccount: "13456289645"
        },
        {
          name: "银行卡",
          account: "445289612356458962",
          icon: "#icon-yinhangqia",
          iconStyle: "width:0.49rem;height:0.49rem;color:#e53a4a",
          bgColor: "background:#e53a4a",
          bankCard: "44521236258964521"
        }
      ]
    };
  },
  methods: {
    changePath() {
      this.$router.push({ path: "/paymentbill" });
    }
  }
};
</script>

<style lang="scss" scoped>
.account {
  @include w-h(100%, 100vh);
  background: #fff;
  color: #fff;
}
.accoun-type {
  @include w-h(6.9rem, 2.8rem);
  border-radius: 0.2rem;
  background: #fff;
  margin-top: 0.32rem;
  box-shadow: 0px 2px 15px 0px #ccc;
  .container {
    height: 1.9rem;
    background: #56c16d;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    padding: 0.3rem 0.7rem 0.3rem 0.3rem;
    box-sizing: border-box;
  }
}
.edit {
  border-right: 1px solid #ccc;
  padding: 0.1rem 0;
}
.operating {
  color: #444;
  width: 100%;
}
.icon-wrapper {
  @include w-h(0.98rem, 0.98rem);
  border-radius: 50%;
  background: #fff;
}
.qrcode-wrapper {
  @include w-h(1.18rem, 1.18rem);
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.account-num {
  margin-left: 0.3rem;
  p {
    word-break: keep-all;
  }
}
</style>
