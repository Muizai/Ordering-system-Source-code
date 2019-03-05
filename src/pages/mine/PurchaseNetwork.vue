<template>
  <div class="invitation-network df fdc">
    <div class="search-wrap df ac jc">
      <div class="search df ac">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <input
          type="text"
          name=""
          id=""
          placeholder="搜索团队成员"
          class="f1"
        >
      </div>
    </div>
    <div class="pr">
      <ul
        class="df pr invite-wrap"
        ref="inviteWrap"
      >
        <li
          v-for="(item,index) in inviteStatusList"
          :key="index"
          class="f1 df ac jc"
          @click="onItem(index,$event)"
          :class="{red:index===selectId}"
        >
          {{item}}
          <span v-if="index!==2">(1)</span>
        </li>
      </ul>

      <div
        class="scroll-bar pa"
        :style="{left:scrollLeft,width:scrollWidth}"
      ></div>

    </div>
    <div
      class="f1 container-wrap"
      style="margin-top:0.13rem"
    >
      <div v-if="selectId===0||selectId===2">
        <div
          class="agentLevel df jsb ac"
          v-if="selectId===0"
        >
          <div>
            <span>一级代理</span>
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xialadown"></use>
            </svg>
          </div>
          <span>1人</span>
        </div>
        <ul class="container">
          <li
            v-for="(item,index) in inviteList"
            class="df ac"
          >
            <div class="img-wrap">
              <img
                src="./../../../static/img/agent-img.jpg"
                alt=""
              >
            </div>
            <div>
              <p style="font-size:0.36rem;font-weight:bold">ATREUS</p>
              <p>总代</p>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="selectId===1">
        <ul class="container">
          <li
            v-for="(item,index) in inviteTeamList"
            :key="index"
            class="df jsb ac"
          >
            <div class="df ac">
              <div class="img-wrap">
                <img
                  src="./../../../static/img/agent-img.jpg"
                  alt=""
                >
              </div>
              <div>
                <p style="font-size:0.36rem;font-weight:bold">{{item}}</p>
                <p>总代</p>
              </div>
            </div>
            <div>
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-arrowright"></use>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inviteStatusList: ["进货下级", "下级团队", "进货上级"],
      scrollWidth: "100px",
      scrollLeft: 0,
      selectId: 0,
      inviteList: ["ATREUS"],
      inviteTeamList: ["ATREUS", "ATREUS", "ATREUS"]
    };
  },
  mounted() {
    this.scrollWidth = `${
      this.$refs.inviteWrap.firstElementChild.clientWidth
    }px`;
  },
  methods: {
    onItem(index, e) {
      this.selectId = index;
      const { clientWidth, offsetLeft } = e.target;
      (this.scrollWidth = `${clientWidth}px`),
        (this.scrollLeft = `${offsetLeft}px`);
    }
  }
};
</script>

<style lang="scss" scoped>
.invitation-network {
  height: 100vh;
}
.search-wrap {
  height: 1.1rem;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  .search {
    @include w-h(6.9rem, 0.7rem);
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 0.1rem;
    box-sizing: border-box;
    padding: 0 0.1rem;
    .icon {
      @include w-h(0.34rem, 0.34rem);
      color: #cdcdcd;
      margin-right: 0.1rem;
    }
  }
}
.invite-wrap {
  height: 1rem;
  background: #fff;
}
.scroll-bar {
  height: 3px;
  background: $red;
  bottom: 0;
  transition: 0.3s all;
}
.red {
  color: $red;
}
.container-wrap {
  .agentLevel {
    height: 0.8rem;
    padding: 0 0.2rem;
    background: #fff;
  }
  .container {
    margin-top: 2px;
    background: #fff;
    li {
      height: 2rem;
      padding: 0 0.2rem;
    }
    .img-wrap {
      @include w-h(1.28rem, 1.28rem);
      border-radius: 50%;
      margin-right: 0.3rem;
      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
