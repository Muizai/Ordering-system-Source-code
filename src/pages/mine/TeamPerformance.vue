<template>
  <div class="team-performance">
    <div class="header df jsb ac">
      <span>团队业绩</span>
      <span>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-riliriqi"></use>
        </svg>
      </span>
    </div>
    <div class="container-wrap df ac jc">
      <div class="container df fdc">
        <div class="brand df ac">
          <div class="img-wrap">
            <img
              src="./../../../static/img/agent-img.jpg"
              alt=""
            >
          </div>
          <div>
            <p class="brand-text">ATREUS</p>
            <p>总代</p>
          </div>
        </div>
        <div class="df f1">
          <div class="fdc df ac jc f1">
            <p>5月团队业绩</p>
            <p class="redtext">￥3000.00</p>
          </div>
          <div class="fdc df ac jc f1">
            <p>团队人数</p>
            <p class="redtext">30</p>
          </div>
          <div class="fdc df ac jc f1">
            <p>直推人数</p>
            <p class="redtext">10</p>
          </div>
        </div>
      </div>
    </div>
    <div class="spacing"></div>
    <div class="num df jsb ac">
      <span>团队人数：</span>
      <div>
        <span class="redtext">10</span>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.team-performance {
  height: 100vh;
  background: #fff;
  .header {
    height: 1rem;
    @include border-bottom;
    padding: 0 0.2rem;
    background: #fff;
    font-weight: bold;
    .icon {
      @include w-h(0.43rem, 0.42rem);
      font-weight: bold;
      color: #444;
    }
  }
}
.container-wrap {
  height: 4.13rem;
  background: #fff;
  .container {
    @include w-h(6.9rem, 3.42rem);
    border-radius: 0.2rem;
    border: 1px solid #eaeaea;
    box-shadow: 0 1px 5px 1px #eaeaea;
    .brand {
      color: #fff;
      height: 2.12rem;
      background: url("./../../../static/img/my_bg2.png") no-repeat center
        center;
      background-size: cover;
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.2rem;
      .img-wrap {
        @include w-h(1.28rem, 1.28rem);
        border-radius: 50%;
        margin-left: 0.3rem;
        margin-right: 0.2rem;
        img {
          @include w-h(100%, 100%);
          border-radius: 50%;
        }
      }
      .brand-text {
        font-size: $fs36;
        margin-bottom: 0.2rem;
      }
    }
  }
}
.spacing {
  height: 0.13rem;
  background: #f5f5f5;
}
.num {
  height: 1rem;
  padding: 0 0.32rem;
  @include border-bottom;
}
</style>
