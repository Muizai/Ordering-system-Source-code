<template>
  <div class="apply-agent-1">
    <div class="process-wrap">
      <ul class="df ac jc">
        <li
          class="f1 df ac jc"
          v-for="(item,index) in stepList"
          :key="index"
        >
          <div class="step df fdc ac jc">
            <span :class="{redbg:now===index||now===index-1,whitetext:now===index||now===index-1}">{{index+1}}</span>
            <span>{{item}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="information df fdc ac jc">
      <img
        src="./../../../static/img/examine-01.png"
        alt=""
      >
      <p>您的资质信息已提交成功（审核中）</p>
    </div>
    <div class="selected-wrap">
      <div class="selected df fdc ac jc">
        <p>已选择代理产品</p>
        <div class="product-wrap df">
          <div class="img-wrap">
            <img
              src="./../../../static/img/product.jpg"
              alt=""
            >
          </div>
          <div class="f1">
            <p class="ellipsis2 ">面膜面膜面膜面膜面膜面
            膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
            膜面膜面膜面膜面膜面面膜面膜面膜面膜面膜面
            膜面膜面膜面膜面膜面</p>
          </div>
          
        </div>
        <p>已选择代理商级别</p>
        <div class="product-wrap agent-wrap df fdc jsb">
          <p class="fs32">总代</p>
          <p class="fs28 gray">1、首次充值贷款xxxx元</p>
          <p class="fs28 gray">2、保证金xxx元</p>
        </div>


        <div class="qrcode df fdc ac jc">
          <img src="./../../../static/img/qrcode.png" alt="">
          <p>长按二维码关注微信公众号，及时接收商家动态</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      stepList: [
        "填写资料",
        "资质审核",
        "缴纳保证金",
        "成为代理商"
      ],
      now: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.process-wrap {
  @include w-h(100%, 1.6rem);
  padding: 0.25rem 0.3rem;
  box-sizing: border-box;
  background: #fff;
  ul {
    li {
      & > div {
        z-index: 100;
      }
      position: relative;
      .step {
        span {
          word-break: keep-all;
          font-size: 0.16rem;
        }
        .redbg {
          background: $red;
        }
      }
    }
    & li:nth-child(3):before,
    & li:nth-child(4):before {
      content: "";
      @include w-h(50%, 1px);
      background: #c1c1c1;
      position: absolute;
      top: 0.23rem;
      left: 0;
    }
    & li:nth-child(2):before {
      content: "";
      @include w-h(50%, 1px);
      background: $red;
      position: absolute;
      top: 0.23rem;
      left: 0;
    }

    & li:nth-child(2):after,
    & li:nth-child(3):after {
      content: "";
      @include w-h(50%, 1px);
      background: #c1c1c1;
      position: absolute;
      top: 0.23rem;
      right: 0;
    }
    & li:nth-child(1):after {
      content: "";
      @include w-h(50%, 1px);
      background: $red;
      position: absolute;
      top: 0.23rem;
      right: 0;
    }
  }
}
.step span:first-child {
  @include w-h(0.46rem, 0.46rem);
  border: 1px solid #c1c1c1;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 0.46rem;
  margin-bottom: 0.3rem;
}
.information {
  background: #fff;
  padding: 0.2rem;
  margin-top: 0.13rem;
  box-sizing: border-box;
  img {
    width: 1.28rem;
    height: 1.18rem;
    margin-bottom: 0.1rem;
  }
}
.selected-wrap {
  padding: 0.22rem;
  box-sizing: border-box;
  .selected {
    background: #fff;
    width: 100%;
    padding-bottom: 0.5rem;
    &>p{
      line-height: 1rem;
    }
    .product-wrap {
      @include w-h(6.7rem, 2.1rem);
      @include box-shadow;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      padding: 0.2rem;
      box-sizing: border-box;
      .img-wrap{
        @include w-h(1.7rem,1.39rem);
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
.agent-wrap{
  padding: 0.2rem;
  margin-top: 0;
}
.qrcode{
  margin-top: 1rem;
  img{
    @include w-h(2.58rem,2.54rem);
    margin-bottom: 0.1rem;
  }
}
</style>
