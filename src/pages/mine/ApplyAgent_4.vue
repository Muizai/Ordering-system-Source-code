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
            <span :class="{redbg:now===index||now===index-1||now===index-2,whitetext:now===index||now===index-1||now===index-2}">{{index+1}}</span>
            <span>{{item}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="information df fdc ac jc pr">
      <img
        src="./../../../static/img/examine-02.png"
        alt=""
      >
      <p>您的打款凭证已成功提交（审核中）</p>
      <svg
        class="icon pa"
        aria-hidden="true"
        @click="onProblem"
      >
        <use xlink:href="#icon-wenhao"></use>
      </svg>
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

      </div>
    </div>
    <div class="charge">打款详情</div>

    <div class="tips-wrap" ref="tips">
      <div class="shadow"></div>
      <div class="tips df fdc ac jc">
        <div class="container df fdc">
          <p class="header fs36 df ac jc">常见问题</p>
          <div class="text f1">
            <p>1.打款凭证成功提交后，什么时候审核通过？</p>
            <p style="margin-top:0.1rem"><span class="redtext">答：</span>提交成功后</p>
          </div>
        </div>
        <svg class="icon" aria-hidden="true" @click="onClose">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      stepList: ["填写资料", "资质审核", "缴纳保证金", "成为代理商"],
      now: 0
    };
  },
  methods:{
    onProblem(){
      this.$refs.tips.style.display="block";
    },
    onClose(){
      this.$refs.tips.style.display="none";
    }
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
    & li:nth-child(4):before {
      content: "";
      @include w-h(50%, 1px);
      background: #c1c1c1;
      position: absolute;
      top: 0.23rem;
      left: 0;
    }
    & li:nth-child(3):before,
    & li:nth-child(2):before {
      content: "";
      @include w-h(50%, 1px);
      background: $red;
      position: absolute;
      top: 0.23rem;
      left: 0;
    }

    & li:nth-child(3):after {
      content: "";
      @include w-h(50%, 1px);
      background: #c1c1c1;
      position: absolute;
      top: 0.23rem;
      right: 0;
    }
    & li:nth-child(2):after,
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
  .icon {
    width: 0.32rem;
    height: 0.32rem;
    color: #444;
    right: 0.2rem;
    top: 0.2rem;
  }
}
.selected-wrap {
  padding: 0.22rem;
  box-sizing: border-box;
  .selected {
    background: #fff;
    width: 100%;
    padding-bottom: 0.5rem;
    & > p {
      line-height: 1rem;
    }
    .product-wrap {
      @include w-h(6.7rem, 2.1rem);
      @include box-shadow;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      padding: 0.2rem;
      box-sizing: border-box;
      .img-wrap {
        @include w-h(1.7rem, 1.39rem);
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
.agent-wrap {
  padding: 0.2rem;
  margin-top: 0;
}
.qrcode {
  margin-top: 1rem;
  img {
    @include w-h(2.58rem, 2.54rem);
    margin-bottom: 0.1rem;
  }
}
.charge {
  @include w-h(6.9rem, 0.8rem);
  background: $red;
  border-radius: 0.04rem;
  color: #fff;
  text-align: center;
  line-height: 0.8rem;
  margin: 1rem auto;
}
.tips-wrap {
    display: none;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  @include w-h(100vw, 100vh);
  .shadow {
    @include w-h(100%, 100%);
    background: $shadow;

  }
  .tips{
    top: 1.5rem;
    width: 100%;
    position: fixed;
    .container{
      width: 5.86rem;
      height: 6.7rem;
      &>p{
        line-height: 1rem;
        background: #FF5353;
        color: #fff;
        border-top-left-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
      }
      .text{
        background: #fff;
        padding: 0.45rem 0.25rem;
        box-sizing: border-box;
      }
    }
    .icon{
      margin-top: 0.56rem;
      @include w-h(0.56rem,0.56rem);
      color: #fff;
    }
  }
}
</style>
