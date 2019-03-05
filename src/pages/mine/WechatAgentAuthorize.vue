<template>
  <div class="wechat-agent-authorize df fdc ac">
    <div class="user-img-wrap">
      <img
        src="./../../../static/img/agent-img.jpg"
        alt=""
      >
    </div>
    <p>ATREUS</p>
    <p>总代</p>
    <div class="qrcode-img-wrap">
      <img
        src="./../../../static/img/qrcode.png"
        alt=""
      >
    </div>
    <p>扫一扫二维码，即可申请代理</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wechat-agent-authorize {
  height: 100%;
  background: url("./../../../static/img/agent-scan.jpg") no-repeat center top;
  background-size: cover;
}
@media screen and (max-height: 850px) {
  .user-img-wrap {
    margin-top: 2.8rem;
  }
}
@media screen and (max-height: 736px) {
  .user-img-wrap {
    margin-top: 2.5rem;
  }
}
@media screen and (max-height: 641px) {
  .user-img-wrap {
    margin-top: 2rem;
  }
}
@media screen and (max-height: 570px) {
  .user-img-wrap {
    margin-top: 2.1rem;
  }
}

p {
  color: #fff;
  margin-top: 0.2rem;
}

.user-img-wrap {
  @include w-h(1.5rem, 1.5rem);
  border-radius: 50%;
  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%;
  }
}
.qrcode-img-wrap {
  margin-top: 1rem;
  @include w-h(2.7rem, 2.7rem);
  img {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
