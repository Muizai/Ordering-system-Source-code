<template>
  <div class="change-password df fdc ac">
    <div class="df fdc ac jc">
      <input
        type="text"
        placeholder="新密码："
      >
      <input
        type="text"
        placeholder="确认新密码："
      >
    </div>
    <Toast
      btnText='确认'
      tipText='修改密码成功'
    ></Toast>
    

  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
.change-password {
  height: 100vh;
  background: #fff;
  & div:first-child {
    margin-top: 0.88rem;
  }
}
input {
  @include w-h(6.3rem,0.8rem);
  border: 1px solid #dbdbdb;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
  margin-bottom: 0.29rem;
}
/deep/.bulletBox .bulletBox-btn {
  width: 6.3rem !important;
  height: 0.8rem !important;
  border-radius: 0.04rem;
  background: $red;
  color: #fff;
  margin-top: 2.17rem;
}
</style>
