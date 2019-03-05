<template>
  <div class="guaranty-1 df fdc ac pr">
    <div class="way-wrap">
      <div class="way df ac jc pr">
        <span>打款方式</span>
        <svg
          @click="onOpen"
          class="icon pa"
          aria-hidden="true"
        >
          <use xlink:href="#icon-wenhao"></use>
        </svg>
      </div>
      <div class="pay-info">
        <p>支付宝账号：13546286623</p>
        <p>支付宝账户：张海航</p>
      </div>
      <div class="contack df jfe ac">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-phone"></use>
        </svg>
        <span>联系总部</span>
      </div>
    </div>
    <div class="redBtn df ac jc">创建凭证</div>

    <div
      class="recharge-process-wrap pa pr"
      ref="recharge_process"
    >
      <div class="shadow"></div>
      <div class="container-wrap pa df fdc ac">
        <div class="container">
          <div class="process df ac jc">保证金充值流程</div>
          <div class="text">
            <p>1.首先您需要先将保证金费用5000.00元打款至以下总部指定的其中一个账户中，将打款凭证截图备用。</p>
            <p>2.打款成功后，点击下面的创建凭证按钮，上传打款凭证。</p>
            <p>3.总部会在最快时间审核您的打款凭证，通过后保证金就缴纳成功了。</p>
          </div>

        </div>
        <svg
          class="icon"
          aria-hidden="true"
          @click="onClose"
        >
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    onOpen() {
      this.$refs.recharge_process.style.display = "block";
    },
    onClose() {
      this.$refs.recharge_process.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.way-wrap {
  background: #fff;
  width: 100%;
}
.way {
  height: 1rem;
  @include border-bottom;
  .icon {
    right: 0.3rem;
  }
}
.pay-info {
  height: 1.65rem;
  padding-left: 0.3rem;
  @include border-bottom;
  p {
    line-height: 0.825rem;
  }
}
.contack {
  height: 0.95rem;
  color: $red;
  span {
    margin-right: 0.3rem;
    margin-left: 0.1rem;
  }
  .icon {
    @include w-h(0.28rem, 0.27rem);
  }
}
.recharge-process-wrap {
  display: none;
  @include w-h(100%, 100vh);
  .shadow {
    background: $shadow;
    @include w-h(100%, 100%);
  }
  .container-wrap {
    width: 100%;
    top: 20vh;
    .icon {
      @include w-h(0.56rem, 0.56rem);
      color: #fff;
      margin-top: 0.56rem;
    }
    .container {
      @include w-h(5.86rem, 6.7rem);
      background: #fff;
      border-bottom-left-radius: 0.1rem;
      border-bottom-right-radius: 0.1rem;
      .process {
        height: 1rem;
        background: #ff5353;
        color: #fff;
        font-size: $fs36;
      }
      .text {
        padding: 0.5rem 0.3rem;
        p {
          word-break: break-all;
          margin-bottom: 0.4rem;
        }
      }
    }
  }
}
</style>
