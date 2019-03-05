<template>
  <div class="pay-success df fdc ac">
    <div class="df fdc ac jc icon-wrap">
      <svg
        class="icon"
        aria-hidden="true"
        style="width:0.77rem;height:0.77rem;color:#c90000;"
      >
        <use xlink:href="#icon-xuanze1"></use>
      </svg>
      <p>订单支付成功</p>
    </div>
    <div class="to-see redbg whitetext df ac jc ">去看看</div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pay-success {
  height: 100vh;
  background: #fff;
}
.icon-wrap {
 height: 4rem;
 p{
     margin-top:0.7rem;
     font-size: $fs28;
 }
}
.to-see{
    @include w-h(6.9rem,0.8rem);
    font-size: $fs30;
    border-radius: 0.04rem;
}
</style>
