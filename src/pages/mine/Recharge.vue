<template>
  <div class="withdrawing pr">
    <div
      class="header pr"
      ref="header"
    >
      <ul
        ref="headerUl"
        class="df"
      >
        <li
          class="f1 df ac jc"
          v-for="(item,index) in headerList"
          :key="index"
          :class="{Ared:index===selectId}"
          @click="onItem(index,$event)"
        >{{item}}</li>
      </ul>
      <div
        class="scroll-bar pa"
        :style="{width:scrollWidth,left:scrollLeft}"
      ></div>
    </div>
    <div
      v-if="selectId===0||selectId===1"
      class="recharge-container-1"
    >
      <p style="color:#777;font-size:0.28rem">充值金额</p>
      <div
        class="df jc ac"
        style="border-bottom:1px solid #eaeaea;"
      >
        <span style="font-size:0.48rem;color:#444">￥</span>
        <input
          type="text"
          name=""
          id=""
          class="f1"
          style="height:1.2rem"
        >
      </div>
      <p
        style="height:0.6rem"
        class="df jsb"
      >
        <span
          v-if="selectId===1"
          style="color:#999;font-size:0.24rem;line-height:0.6rem"
        >收益余额56.54元</span>
        <span
          v-if="selectId===1"
          class="redtext"
          style="line-height:0.6rem"
        >全部充值</span>
      </p>
    </div>
    <div
      v-if="selectId===2"
      class="rechaagecontainer-2 df fdc"
    >
      <div class="pa-way df ac jc prs">
        <span>打款方式</span>
        <div
          class="pa how"
          @click="onHow"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-wenhao"></use>
          </svg>
        </div>
      </div>
      <div class="f1 information df fdc jc">
        <p>支付宝账号：132564896</p>
        <p>支付宝账户：张海航</p>
      </div>
      <div class="contact redtext df jfe ac">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-phone"></use>
        </svg>
        <span> 联系总部</span>
      </div>
    </div>
    <div class="btn">确认充值</div>

    <div
      class="tips-wrap pa"
      ref="tipsWrap"
    >
      <div class="shadow"></div>
      <div class="container-wrap pa df fdc ac jc">
        <div class="container">
          <div class="title">线下充值流程</div>
          <div class="text">
            <p>1.将需要充值的钱打到总部指定的财务账户之一，同时将您的打款凭证进行截图保留。</p>
            <p>2.打款成功后，点击下面的创建凭证按钮，将您充值的金额、打款的账户及打款凭证进行认真填写并提交。</p>
            <p>3.总部财务人员在审核您的货款充值申请并确认您的打款收到之后， 会第一时间帮您进行货款充值，请及时留意您的货款余额变化。</p>
          </div>
        </div>
        <div @click="onClose">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-guanbi"></use>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: ["在线充值", "收入充值", "线下充值"],
      selectId: 0,
      scrollWidth: "2rem",
      scrollLeft: 0,
      selectId: 0,
      withDrawList: [
        {
          name: "李文",
          account: "174589623568",
          amount: "500.00",
          date: "2018-05-21 12:00"
        },
        {
          name: "李看手机文",
          account: "174589623568",
          amount: "500.00",
          date: "2018-05-21 12:00"
        },
        {
          name: "李欧辰文",
          account: "174589623568",
          amount: "500.00",
          date: "2018-05-21 12:00"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$refs.headerUl);
    this.scrollWidth = `${this.$refs.headerUl.firstElementChild.clientWidth}px`;
  },
  methods: {
    onItem(index, e) {
      this.selectId = index;
      const { clientWidth, offsetLeft } = e.target;
      this.scrollWidth = `${clientWidth}px`;
      this.scrollLeft = `${offsetLeft}px`;
      $(this.$refs.header).animate({
        scrollLeft: offsetLeft - window.innerWidth / 2
      });
    },
    onHow() {
      this.$refs.tipsWrap.style.display = "block";
    },
    onClose() {
      this.$refs.tipsWrap.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.withdrawing {
  height: 100vh;
  .header {
    background: #fff;
    overflow-x: auto;
    @include border-bottom;
    ul {
      white-space: nowrap;
    }
    li {
      height: 1rem;
      word-break: break-all;
      padding: 0.1rem;
    }
  }
}
.header::-webkit-scrollbar {
  display: none;
}
.red {
  color: $red;
}
.scroll-bar {
  height: 3px;
  background: $red;
  bottom: 0;
  transition: 0.3s all;
}
.redborder {
  @include w-h(1.98rem, 0.62rem);
  border: 1px solid $red;
  margin: 0.2rem 0;
}
.withdrawContainer li {
  padding: 0 0.2rem;
  background: #fff;
}
.withDrawWay {
  color: #444;
  font-size: $fs30;
  font-weight: bold;
}
.user {
  font-size: $fs24;
  color: #444;
  margin: 0.2rem 0;
}
.date {
  color: #999;
  font-size: $fs24;
}
.recharge-container-1 {
  padding: 0.2rem 0.2rem 0;
  background: #fff;
  margin-top: 0.13rem;
}
.btn {
  width: 6.9rem;
  line-height: 0.8rem;
  background: $red;
  border-radius: 0.04rem;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  margin-top: 1.4rem;
}
.rechaagecontainer-2 {
  height: 3.6rem;
  margin-top: 0.13rem;
  background: #fff;
  padding: 0 0.2rem;
  .pa-way {
    height: 1rem;
    @include border-bottom;
  }
  .how {
    right: 0.2rem;
    .icon {
      @include w-h(0.32rem, 0.32rem);
    }
  }
  .contact {
    height: 0.94rem;
    .icon {
      margin-right: 0.1rem;
    }
  }
  .information {
    @include border-bottom;
    p {
      line-height: 0.6rem;
    }
  }
}
.tips-wrap {
  top: 0;
  @include w-h(100%, 100vh);
  display: none;
  .shadow {
    height: 100vh;
    background: $shadow;
  }
  .container-wrap {
    top: 2.1rem;
    width: 100%;
    .container {
      @include w-h(5.86rem, 6.7rem);
      border-radius: 0.1rem;
      background: #fff;
      .title {
        line-height: 1rem;
        border-top-left-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
        background: #ff5353;
        color: #fff;
        text-align: center;
      }
      .text {
        padding: 0.4rem;
        p {
          margin-bottom: 0.3rem;
          line-height: 0.4rem;
        }
      }
    }
    .icon {
      @include w-h(0.56rem,0.56rem);
      color: #fff;
      margin-top: 0.56rem;
    }
  }
}
</style>
