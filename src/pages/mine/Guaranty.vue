<template>
  <div class="guaranty-n df fdc ac">
    <img
      src="./../../../static/img/bond-yes.png"
      alt=""
    >
    <p>您已缴纳保证金</p>
    <p class="count">￥5000.00</p>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
.guaranty-n {
  img {
    @include w-h(2.88rem,2.2rem);
    margin-top: 1.88rem;
  }
  p {
    margin-top: 0.7rem;
  }
  .count {
    color: $red;
    font-size: 0.58rem;
    margin-top: 0.5rem;
  }
}
</style>
