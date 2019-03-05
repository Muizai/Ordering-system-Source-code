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
            <span :class="{redbg:now===index,whitetext:now===index}">{{index+1}}</span>
            <span>{{item}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="agent-information">
      <ul>
        <li class="df ac">
          <span>姓名</span>
          <input
            class="gray"
            type="text"
            placeholder="请输入姓名"
          >
        </li>
        <li class="df ac">
          <span>身份证</span>
          <input
            class="gray"
            type="text"
            placeholder="请输入身份证号码"
          >
        </li>
        <li class="df ac">
          <span>微信号</span>
          <input
            class="gray"
            type="text"
            placeholder="请输入微信号"
          >
        </li>

        <li class="df jsb ac">
          <span>性别</span>
          <div>
            <span class="gray">请选择</span>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
        </li>
        <li class="df jsb ac">
          <span>出生年月</span>
          <div>
            <span class="gray">请选择</span>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
        </li>
        <li class="df jsb ac">
          <span>地区</span>
          <div>
            <span class="gray">请选择</span>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-arrowright"></use>
            </svg>
          </div>
        </li>
      </ul>
        <ul>
        <li class="df ac">
          <span>手机号</span>
          <input
            class="gray"
            type="text"
            placeholder="请输入手机号码"
          >
        </li>
        <li class="df ac pr">
          <span>验证码</span>
          <input
            class="gray"
            type="text"
            placeholder="请输入验证码"
          >
          <div class="get-code pa">获取验证码</div>
        </li>
        <li class="df ac">
          <span>密码</span>
          <input
            class="gray"
            type="text"
            placeholder="请输入密码"
          >
        </li>
        <li class="df ac">
          <span>密码</span>
          <input
            class="gray"
            type="text"
            placeholder="请再次输入密码"
          >
        </li>


      </ul>
      
    </div>
    <div class="submit">提交</div>
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
    & li:nth-child(4)::before {
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
    & li:nth-child(3):after{
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
.agent-information {
  
  ul {
  margin-top: 0.13rem;
  background: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
    li {
      height: 1rem;
      & span:first-child {
        width: 20%;
      }
      @include border-bottom;
    }
    & li:last-child{
        border-bottom: none;
    }
    
  }
}
.get-code{
    @include w-h(1.5rem,0.5rem);
    border: 1px solid $red;
    color: $red;
    text-align: center;
    line-height: 0.5rem;
    right: 0;
    border-radius: 0.04rem;
    font-size: 0.16rem;
}
.submit{
    @include w-h(6.9rem,0.8rem);
    background: $red;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
    margin: 1rem auto;
}
</style>
