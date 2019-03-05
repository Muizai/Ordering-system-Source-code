<template>
  <div class="login-wrap df fdc ac">
    <div class="df fdc login">
      <input
        type="text"
        placeholder="账号："
      >
    </div>
    <div
      class="to-login df ac jc"
      @click="next"
    >下一步</div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push({ path: "resetpw2" });
    }
  }
};
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
</style>
