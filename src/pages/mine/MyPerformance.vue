<template>
  <div class="my-performance df fdc ac jc">
    <ul class="df fdc ac jc">
      <li>
        <div class="brand brand-a df ac">
          <div class="img-wrap">
            <img
              src="./../../../static/img/agent-img.jpg"
              alt=""
            >
          </div>

          <div>
            <p class="brand-name">ATREUS</p>
            <p class="whitetext">总代</p>
          </div>
        </div>
        <div class="container df ">
          <div class="f1 df fdc ac jc">
            <p>5月个人业绩</p>
            <p class="redtext">￥3000.00</p>
          </div>
          <div class="f1 df fdc ac jc">
            <p>当月未开启月任务</p>
          </div>
        </div>
      </li>
      <li>
        <div class="brand brand-b df ac">
          <div class="img-wrap">
            <img
              src="./../../../static/img/agent-img.jpg"
              alt=""
            >
          </div>

          <div>
            <p class="brand-name">ATREUS</p>
            <p class="whitetext">总代</p>
          </div>
        </div>
        <div class="container df ">
          <div class="f1 df fdc ac jc">
            <p>5月个人业绩</p>
            <p class="redtext">￥3000.00</p>
          </div>
          <div class="f1 df fdc ac jc">
            <p>团队人数</p>
            <p class="redtext">30</p>
          </div>
          <div class="f1 df fdc ac jc">
            <p>直推人数</p>
            <p class="redtext">10</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-performance {
  width: 100%;
  ul {
    width: 100%;
    li {
      @include w-h(6.9rem,3.42rem);
      border-radius: 0.2rem;
      margin-top: 0.3rem;
      @include box-shadow;
      .brand-a {
        background: url("./../../../static/img/my_bg1.png") no-repeat center
          center;
        background-size: cover;
      }
      .brand-b {
        background: url("./../../../static/img/my_bg2.png") no-repeat center
          center;
        background-size: cover;
      }
      .brand {
        height: 2.12rem;
        border-top-left-radius: 0.2rem;
        border-top-right-radius: 0.2rem;

        .img-wrap {
          @include w-h(1.28rem,1.28rem);
          border-radius: 50%;
          margin-left: 0.3rem;
          margin-right: 0.3rem;

          img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 50%;
          }
        }
      }
      .container {
        height: 1.3rem;
        background: #fff;
        padding: 0.2rem 0;
        box-sizing: border-box;
        border-bottom-left-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        & div {
          border-right: 1px solid #eaeaea;
        }
      }
    }
  }
}
.container > div:last-child {
  border: none !important;
}
.brand-name {
  color: #fff;
  font-size: $fs36;
  margin-bottom: 0.2rem;
}
.redtext{
    font-size: $fs36;
    margin-top: 0.1rem;
}
</style>
