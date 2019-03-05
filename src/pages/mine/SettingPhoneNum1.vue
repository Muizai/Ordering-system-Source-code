<template>
  <div class="phonenum df fdc ac pr">
    <svg
      class="icon"
      aria-hidden="true"
    >
      <use xlink:href="#icon-shouji"></use>
    </svg>
    <p>当前手机号码：13545896323</p>
    <div
      class="changephonenum df ac jc"
      @click="changePhoneNum"
    >更换手机号码</div>

    <div
      class="verify-wrap pa pr"
      ref="verify"
    >
      <div class="shadow"></div>
      <div class="verify-container-wrap df jc pa">
        <div class="verify-container df fdc">
          <div class="f1 df fdc jsb">
            <div class="f1 df ac jc verify">验证登录信息</div>
            <div class="df jc ac password-wrap">
              <input
                type="text"
                placeholder="请输入您的登录密码"
              >
            </div>
            <div class="f1 forget-password">
              <span>忘记密码？</span></div>
          </div>
          <div class="df on">
            <div
              class="f1 df ac jc cancel"
              @click="cancel"
            >取消</div>
            <div class="f1 redtext df ac jc">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changePhoneNum() {
      this.$refs.verify.style.display = "block";
    },
    cancel() {
      this.$refs.verify.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.phonenum {
  background: #fff;
  height: 100vh;
  .icon {
    @include w-h(1.12rem, 1.12rem);
    color: $red;
    margin-top: 1.2rem;
  }
  p {
    margin-top: 0.8rem;
    color: #444;
    font-size: $fs28;
  }
  .changephonenum {
    margin-top: 2.09rem;
    background: $red;
    border-radius: 0.04rem;
    color: #fff;
    @include w-h(6.9rem, 0.8rem);
    font-size: $fs30;
  }
}
.verify-wrap {
  display: none;
  @include w-h(100%, 100vh);
  top: 0;
  .shadow {
  @include w-h(100%, 100%);
    background: rgba(0, 0, 0, 0.3);
  }
  .verify-container-wrap {
    width: 100%;
    top: 20vh;
    .verify-container {
  @include w-h(5.86rem, 3.9rem);
      background: #fff;
      border-radius: 0.1rem;
      .verify {
        font-size: $fs30;
        color: #444;
      }
    }
  }
}
.cancel {
  color: #c5c5c5;
  border-right: 1px solid #e4e4e4;
}
input {
  @include w-h(5.36rem, 0.9rem);
  border: 1px solid #e4e4e4;
  border-radius: 0.04rem;
  padding: 0.2rem;
  box-sizing: border-box;
  outline: none;
}
.password-wrap {
  flex: 1.5;
  font-size: $fs28;
  color: #666;
}
.forget-password {
  font-size: $fs24;
  color: #999;
  text-align: right;
  span {
    border-bottom: 1px solid #999;
    margin-right: 0.2rem;
  }
}
.on {
  height: 1rem;
  border-top: 1px solid #e4e4e4;
}
</style>
