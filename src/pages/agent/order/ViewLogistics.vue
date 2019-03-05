<template>
  <div class="viewlogistics">
    <div class="logistics-message df">
      <div class="img-wrap">
        <img
          src="./../../../../static/img/product.jpg"
          alt=""
        >
      </div>
      <div class="message-wrap">
        <p>物流状态：运输中</p>
        <p>承运来源：中国邮政</p>
        <p>运单编号：45216258965245</p>
      </div>
    </div>
    <div
      style="background:#fff"
      class="logistics-tracking"
    >
      <p>物流跟踪</p>
      <ul>
        <li class="df fdc jc pr">
          <div class="df jc fdc">
            <p>已签收</p>
            <p><span>2018-4-27</span> <span>17:57:56</span></p>
          </div>
          <svg
            class="icon pa"
            aria-hidden="true"
          >
            <use xlink:href="#icon-xuanze1"></use>
          </svg>
        </li>
        <li class="df fdc jc pr">
          <div class="df jc fdc">
            <p>广州处理中心已发出</p>
            <p><span>2018-4-27</span> <span>17:57:56</span></p>
          </div>
          <div class="dot pa"></div>
        </li>
        <li class="df fdc jc pr">
          <div class="df jc fdc">
            <p>佛山处理中心已发出</p>
            <p><span>2018-4-27</span> <span>17:57:56</span></p>
          </div>
          <div class="dot pa"></div>
        </li>
        <li class="df fdc jc pr">
          <div class="df jc fdc">
            <p>深圳处理中心已发出</p>
            <p><span>2018-4-27</span> <span>17:57:56</span></p>
          </div>
          <div class="dot pa"></div>
        </li>
        <li class="df fdc jc pr">
          <div class="df jc fdc">
            <p>揭阳处理中心已发出</p>
            <p><span>2018-4-27</span> <span>17:57:56</span></p>
          </div>
          <div class="dot pa"></div>
        </li>
        <li class="df fdc jc pr">
          <div class="df jc fdc">
            <p>广州处理中心已收入</p>
            <p><span>2018-4-27</span> <span>17:57:56</span></p>
          </div>
          <div class="pa last-dot"></div>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.viewlogistics {
  color: #444;
  background: #fff;
  height: 100%;
}
.logistics-message {
  height: 2.1rem;
  background: #f6f6f6;
  .img-wrap {
    @include w-h(1.5rem, 1.5rem);
    margin: 0.27rem 0.32rem 0.33rem 0.27rem;
    vertical-align: middle;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .message-wrap {
    vertical-align: middle;
    margin-top: 0.38rem;
    p {
      line-height: 0.4rem;
    }
  }
}
.logistics-tracking {
  border-bottom: 1px solid #eaeaea;
  & > p:first-child {
    line-height: 0.82rem;
    border-bottom: 1px solid #eaeaea;
    padding-left: 0.44rem;
    font-size: $fs30;
    color: #444;
  }
  li {
    margin-left: 0.44rem;
    border-left: 1px solid #e2dede;
    padding-left: 0.58rem;
    .icon {
      color: #c90000;
      @include w-h(0.4rem, 0.4rem);
      top: -1px;
      left: -0.2rem;
    }
    .dot {
      @include w-h(0.18rem, 0.18rem);
      background: #e5e5e5;
      border-radius: 50%;
      top: 50%;
      left: -0.1rem;
      padding: 0;
    }
    .last-dot {
      @include w-h(0.18rem, 0.18rem);
      background: #e5e5e5;
      border-radius: 50%;
      left: -0.1rem;
      padding: 0;
      bottom: 0;
    }
    div {
      @include border-bottom;
      font-size: $fs28;
      padding: 0.19rem 0;
      & p:last-child {
        color: #999;
        margin-top: 0.15rem;
        font-size: $fs24;
      }
    }
  }
  ul {
    padding: 0.27rem 0;
    & li:first-child {
      div {
        padding-top: 0;
      }
    }
    & li:last-child {
      div {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }
}
</style>
