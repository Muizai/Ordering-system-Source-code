<template>
  <div class="announcement-detail">
      <div class="tips df jsb ac">
          <span>活动时间：06-13~06-14</span>
          <span class="redtext">即将开始</span>
      </div>
      <div class="container">
    <p class="title">妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神</p>
    <p class="date">2018-5-22</p>
    <p class="detail">
      妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神妆蕾RAY女妆
      RAY女神妆蕾RAY女神妆蕾RAY女神RAY女神妆蕾RAY女
      神妆蕾RAY女神RAY女神妆蕾RAY女神妆蕾RAY女神RAY
      女神妆蕾RAY女神妆蕾RAY女神
    </p>
    <img
      src="./../../../static/img/activitybg.jpg"
      alt=""
    >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.announcement-detail {
    .container{
  padding: 0.2rem;

    }
  .tips{
      @include w-h(100%,0.8rem);
      background: #FFEAEA;
      padding: 0 0.2rem;
      box-sizing: border-box;

  }
  .title {
    color: #444;
    font-size: $fs36;
    font-weight: bolder;
    margin-top: 0.07rem;
  }
  .date {
    color: #999;
    font-size: $fs24;
    margin-top: 0.2rem;
  }
  .detail {
    text-indent: 10pt;
    margin-top: 0.4rem;
    color: #666;
    font-size: $fs28;
    word-break: break-all;
  }
  img {
    @include w-h(7.1rem,3.46rem);
    margin-top: 0.5rem;
  }
}
</style>
