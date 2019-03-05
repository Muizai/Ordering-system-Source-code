<template>
  <div class="settingphonenum">
    <div class="df fdc ac">
      <div class="df ac jc phonenum">
        <input
          type="text"
          placeholder="手机号码："
        >
      </div>
      <div class="df ac jc">
        <div class="verification-code">
          <input
            type="text"
            class="df ac jc"
            placeholder="验证码："
          >
        </div>
        <div class="df ac jc get-verifycation">获取验证码</div>
      </div>
      <div class="toast">
      <Toast btnText='确认' tipText="修改手机号码成功"></Toast>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.settingphonenum {
  height: 100vh;
  background: #fff;
}
.phonenum {
  input {
    @include w-h(6.3rem,0.8rem);
    border: 1px solid #dbdbdb;
    border-radius: 0.1rem;
    margin-top: 0.88rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    color: #444;
  }
}
.verification-code {
  input {
    @include w-h(4.3rem,0.8rem);
    border: 1px solid #dbdbdb;
    border-radius: 0.1rem;
    margin-top: 0.88rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    color: #444;
  }
}
.get-verifycation {
    @include w-h(1.8rem,0.8rem);
    border: 1px solid $red;
    border-radius: 0.1rem;
    margin-top: 0.88rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    color: $red;
    margin-left: 0.2rem;
}
.confirm{
    @include w-h(6.3rem,0.8rem);
    background: $red;
    border-radius: 0.04rem;
    color: #fff;
    margin-top: 2.09rem;
}
/deep/.bulletBox .bulletBox-btn{
    width: 6.3rem !important;
    height: 0.8rem !important;
    background: $red;
    border-radius: 0.04rem;
    color: #fff;
    margin-top: 2.09rem;
}
</style>
