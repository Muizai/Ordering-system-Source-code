<template>
  <div class="login-wrap df fdc ac">
    <div class="df fdc login">
      <input
        type="text"
        placeholder="账号："
      >
      <input
        type="text"
        placeholder="密码："
      >
    </div>
    <div class="to-login df ac jc">登录</div>
    <div class="forget-pw df jfe">忘记密码？</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100vh;
  background: #fff;
  .login {
    margin-top: 0.88rem;
  }
  input {
    @include w-h(6.3rem, 0.8rem);
    border: 1px solid #dbdbdb;
    border-radius: 0.1rem;
    padding-left: 0.2rem;
    margin-bottom: 0.29rem;
    box-sizing: border-box;
  }
}
.to-login {
  @include w-h(6.3rem, 0.8rem);
  background: $red;
  color: #fff;
  border-radius: 0.04rem;
  margin-top: 0.88rem;
}
.forget-pw {
  font-size: $fs24;
  color: #616161;
  width: 6.3rem;
  margin-top: 0.3rem;
}
</style>
