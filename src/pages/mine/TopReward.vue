<template>
  <div class=" invite-onetime-reward">
    <div class="header pr">
      <ul
        class="df"
        ref="ulList"
      >
        <li
          v-for="(item,index) in headerList"
          class="df f1 ac jc"
          :class="{redtext:selectId===index}"
          @click="onItem(index,$event)"
        >
          {{item}}
        </li>
      </ul>
      <div
        class="scroll-bar pa"
        :style="{width:scrollWidth,left:scrollLeft}"
      ></div>
    </div>
    <div class="container-wrap">
      <ul>
        <li class="df jsb ac">

          <div>
            <p>总奖励</p>
            <p>获得：￥8980.00</p>
          </div>
          <svg
            class="icon"
            aria-hidden="true"
            @click="onTips"
          >
            <use xlink:href="#icon-wenhao"></use>
          </svg>
        </li>
      </ul>
    </div>

    <!-- 提示 -->
    <div
      class="tipsWrap"
      ref="tips"
    >
      <div class="shadow"></div>
      <div class="tips df fdc ac">
        <div class="container-wrap">
          <p>邀请一次性奖励</p>
          <div class="container">代理商邀请大于或等于自己等级的代理商时将会获得一次固定奖励（包含:我获得的、我给出的）</div>
        </div>
        <svg
          class="icon"
          aria-hidden="true"
          @click="onClose"
        >
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>

    </div>
    <!-- 提示 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: ["获得", "给出"],
      selectId: 0,
      scrollWidth: 0,
      scrollLeft: 0,
      containerList: []
    };
  },
  mounted() {
    this.scrollWidth = `${this.$refs.ulList.firstElementChild.clientWidth}px`;
  },
  methods: {
    onItem(index, e) {
      const { clientWidth, offsetLeft } = e.target;
      this.selectId = index;
      this.scrollWidth = `${clientWidth}px`;
      this.scrollLeft = `${offsetLeft}px`;
    },
    onTips() {
      this.$refs.tips.style.display = "block";
    },
    onClose() {
      this.$refs.tips.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.invite-onetime-reward {
  width: 100%;
}
.header {
  height: 1rem;
  background: #fff;
  @include border-bottom;
  ul {
    height: 100%;
    li {
      height: 100%;
    }
  }
}
.scroll-bar {
  height: 3px;
  background: $red;
  bottom: 0;
  transition: 0.3s all;
}
.container-wrap {
  li {
    height: 1rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background: #fff;
    @include border-bottom;
  }
}
.tipsWrap {
  @include w-h(100%, 100vh);
  bottom: 0;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  .shadow {
    background: $shadow;
    @include w-h(100%, 100%);
  }
  .tips {
    position: fixed;
    top: 20vh;
    left: 50%;
    margin-left: -2.93rem;
    .container-wrap {
      @include w-h(5.86rem, 6.7rem);
      background: #fff;
      p {
        line-height: 1rem;
        background: #ff5353;
        color: #fff;
        text-align: center;
        font-size: $fs36;
      }
      .container {
        padding: 0.36rem;
        box-sizing: border-box;
      }
    }
    .icon {
      @include w-h(0.56rem, 0.56rem);
      color: #fff;
      margin-top: 0.56rem;
    }
  }
}
</style>
