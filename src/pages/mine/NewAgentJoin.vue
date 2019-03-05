<template>
  <div class="new-agent-join">

    <!-- 代理产品 start -->
    <div class="agent-product">代理产品</div>
    <div class="product-wrap">
      <ul class="df fdc ac jc">
        <li class="df jsb ac">
          <div class="df f1">
            <div class="img-wrap">
              <img
                src="./../../../static/img/product.jpg"
                alt=""
              >
            </div>
            <div class="f1">
              <p class=" text ellipsis2">
                面膜面膜面膜面膜面膜面
                膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
                膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
                膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
                膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
                膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
                膜面膜面膜面膜面膜面
              </p>
            </div>

          </div>

          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xuanze1"></use>
          </svg>

        </li>
      </ul>
    </div>
    <!-- 代理产品 end -->

    <!-- 代理级别 start -->
    <div class="agent-level">代理商级别</div>
    <div class="product-wrap level-wrap">
      <ul class="df fdc ac">
        <li class="df jsb ac">
          <div>
            <p>总代</p>
            <p class="gray">1、首次充值货款XXXX元</p>
            <p class="gray">2、保证金XXXX元</p>
          </div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xuanze1"></use>
          </svg>
        </li>
        <li class="df jsb ac">
          <div>
            <p>分销</p>
            <p class="gray">1、首次充值货款XXXX元</p>
            <p class="gray">2、保证金XXXX元</p>
          </div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xuanze1"></use>
          </svg>
        </li>

      </ul>
    </div>

    <!-- 代理级别 end -->

    <router-link
      tag="div"
      class="btn"
      to="/wechatagentauthorize"
      
    >确认</router-link>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.new-agent-join {
  height: 100vh;
  background: #fff;
}
.agent-product,
.agent-level {
  line-height: 1rem;
  text-align: center;
  font-size: $fs28;
  background: #fff;
}
.product-wrap {
  ul {
    background: #fff;
    padding: 0.2rem;
    box-sizing: border-box;
    li {
      @include w-h(6.9rem, 2.1rem);
      border-radius: 0.1rem;
      box-shadow: 0 0 10px 2px #eaeaea;
      margin-bottom: 0.42rem;
    }
  }
}
.level-wrap {
  ul {
    box-sizing: border-box;
    li {
      padding: 0.4rem;
      box-sizing: border-box;
    }
  }
}
.btn {
  width: 6.9rem;
  line-height: 0.8rem;
  background: $red;
  color: #fff;
  border-radius: 0.04rem;
  text-align: center;
  display: block;
  margin: 0 auto;
}
.img-wrap {
  @include w-h(1.7rem, 1.39rem);
  margin: 0.43rem 0rem 0.28rem 0.2rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.text {
  margin-top: 0.42rem;
}
.icon {
  margin: 0 0.3rem;
  @include w-h(0.43rem, 0.43rem);
    color: $red;
}
.gray {
  color: #999;
  font-size: $fs28;
}
</style>
