<template>
  <div class="df ac jc apply-agent fdc">
    <div class="user-wrap df ac jc fdc">
      <div class="img-wrap">
        <img
          src="./../../../static/img/agent-img.jpg"
          alt=""
        >
      </div>
      <p
        class="fs36"
        style="margin-top:0.1rem"
      >ATREUS</p>
      <p class="fs32">邀请人：李贤</p>
    </div>
    <div class="produce-wrap df jsb ac">
      <div class="img-wrap">
        <img
          src="./../../../static/img/product.jpg"
          alt=""
        >
      </div>
      <p class="ellipsis2 f1">
        面膜面膜面膜面膜面膜面
        膜面膜面膜面膜面膜面
        面膜面膜面膜面膜面膜面
        膜面膜面膜面膜面膜面
        面膜面膜面膜面膜面膜面
        膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
        膜面膜面膜面膜面膜面
        面膜面膜面膜面膜面膜面
        膜面膜面膜面膜面膜面
        面膜面膜面膜面膜面膜面
        膜面膜面膜面膜面膜面
      </p>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-xuanze1"></use>
      </svg>
    </div>
    <div class="agent-wrap df jsb ac">
      <div>
        <p class="fs32 ">总代</p>
        <p class="gray fs28">1、首次充值贷款xxxx元</p>
        <p class="gray fs28">2、保证金xxx元</p>
      </div>
      <svg
        class="icon redtext"
        aria-hidden="true"
      >
        <use xlink:href="#icon-xuanze1"></use>
      </svg>
    </div>
    <div class="next df ac jc ">下一步</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-wrap {
  @include w-h(100%, 3rem);
  background: url("./../../../static/img/my-user.jpg") no-repeat center center;
  background-size: cover;
  color: #fff;
}
.img-wrap {
  @include w-h(1.31rem, 1.31rem);
  border-radius: 50%;
  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%;
  }
}
.produce-wrap {
  @include w-h(6.9rem, 2.1rem);
  @include box-shadow;
  margin-top: 0.5rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  p {
    margin: 0 0.1rem;
  }
  .icon {
    color: $red;
  }
}
.agent-wrap {
  @include w-h(6.9rem, 2.1rem);
  @include box-shadow;
  padding: 0 0.2rem;
  box-sizing: border-box;
  margin-top: 0.5rem;

}
.next{
    @include w-h(6.9rem,0.8rem);
    background: $red;
    border-radius: 0.04rem;
    color: #fff;
    margin-top: 2rem;
}
</style>
