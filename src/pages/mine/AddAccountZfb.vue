<template>
  <div class="addaccount df fdc ac">
    <div>
      <p class="user-name df fdc jfe">用户名</p>
      <input
        type="text"
        class="user-name-input"
        placeholder="请输入用户名"
      >
    </div>
    <div>
      <p class="user-name ot df ac">账号</p>
      <input
        type="text"
        class="user-name-input"
        placeholder="请输入支付宝账号"
      >
    </div>
    
    <div
      class="redBtn df ac jc"
      @click="onAdd"
    >确认添加</div>
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
              @click="onCancel"
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
    onAdd() {
      this.$refs.verify.style.display = "block";
    },
    onCancel() {
      this.$refs.verify.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.addaccount>div {
  width: 100%;
}
.user-name {
  padding-left: 0.23rem;
  height: 0.99rem;
  padding-bottom: 0.2rem;
  box-sizing: border-box;

}
.ot{
  line-height: 0.68rem;
  padding-bottom: 0;
  height: 0.68rem;
}
.user-name-input {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: #c5c5c5;
  font-size: 0.28rem;
  padding-left: 0.23rem;
}
.add-code {
  width: 100%;
  margin-top: 0.3rem;
  background: #fff;
  p {
    padding-left: 0.23rem;
    line-height: 0.7rem;
    font-size: 0.28rem;
    color: #444;
  }
}
.code-wrapper {
  overflow: hidden;
}
.add-img {
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1.5rem;
  border: 1px dashed #ccc;
  font-weight: lighter;
  color: #c5c5c5;
  float: left;
  margin: 0.16rem 0.21rem;
}
.verify-wrap {
  display: none;
  height: 100vh;
  width: 100%;
  top: 0;
  .shadow {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .verify-container-wrap {
    width: 100%;
    top: 20vh;
    .verify-container {
      width: 5.86rem;
      height: 3.9rem;
      background: #fff;
      border-radius: 0.1rem;
      .verify {
        font-size: 0.3rem;
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
  width: 5.36rem;
  height: 0.9rem;
  border: 1px solid #e4e4e4;
  border-radius: 0.04rem;
  padding: 0.2rem;
  box-sizing: border-box;
  outline: none;
  color: #C5C5C5;
}
.password-wrap {
  flex: 1.5;
  font-size: 0.28rem;
  color: #666;
}
.forget-password {
  font-size: 0.24rem;
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
.redBtn{
  width: 6.9rem !important;
}
</style>
