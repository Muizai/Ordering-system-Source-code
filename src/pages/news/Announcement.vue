<template>
  <div class="df fdc ac announcement">
    <div class="list df ac jc">
      <div class="img-wrap">
        <img
          src="./../../../static/img/agent-img.jpg"
          alt=""
        >
      </div>
      <div class="f1 information">
        <p class="title">妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神</p>
        <p class="container ellipsis2">妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神妆蕾RAY女
          妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神...</p>
      </div>
    </div>
    <div class="list df ac jc">
      <div class="img-wrap">
        <img
          src="./../../../static/img/agent-img.jpg"
          alt=""
        >
      </div>
      <div class="f1 information">
        <p class="title">妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神</p>
        <p class="container ellipsis2">妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神妆蕾RAY女
          妆蕾RAY女神妆蕾RAY女神妆蕾RAY女神...</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.announcement {
  padding: 0 0.2rem;
}
.container-warp {
  overflow-y: auto;
  background: #fff;
  margin-top: 0.13rem;
}
.news {
  @include w-h(6.9rem, 1.82rem);
  border-radius: 0.1rem;
  box-shadow: 0 0 10px 2px #e0dcdc;
  margin-top: 0.3rem;
}
.date {
  margin: 0.33rem 0 0.1rem 0.29rem;

  span {
    color: #999;
    font-size: 0.26rem;
  }
}
.news-title {
  color: #666;
  font-size: $fs28;
  margin: 0 0.46rem 0 0.29rem;
}
.list {
  @include border-bottom;
  padding: 0.2rem 0;
}
.img-wrap {
  @include w-h(1.24rem, 1.24rem);
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.title {
  color: #444444;
  font-size: $fs30;
}
.information {
  margin: 0 0.2rem;
}
.container {
  color: #999;
  font-size: $fs24;
}
</style>
