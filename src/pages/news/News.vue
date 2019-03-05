<template>
  <div class="df fdc news-wrap">
    <div class="header pr">
      <ul
        class="df ac"
        ref="ulList"
      >
        <li
          v-for="(item,index) in headerList"
          :class="{red:index===selectId}"
          @click="onItem(index,$event)"
          class="f1 df ac jc"
          :key="index"
        >{{item}}</li>
      </ul>
      <div
        class="bar-bottom pa"
        :style="{left:scrollBarLeft,width:scrollBarWidth}"
      ></div>
    </div>
    <div class="f1 container-wrap">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: ["系统消息", "公告资讯", "活动预告"],
      selectId: 0,
      scrollBarLeft: 0,
      scrollBarWidth: 0
    };
  },
  mounted() {
    let firstLi = this.$refs.ulList.firstElementChild;
    this.scrollBarWidth = `${firstLi.offsetWidth}px`;
    if (this.$route.path === "/agent/news") {
      this.$router.replace({ path: "/agent/news/systeminformation" });
    }
  },
  methods: {
    onItem(index, e) {
      this.selectId = index;
      const { offsetWidth, offsetLeft, clientWidth } = e.target;
      console.log(clientWidth, offsetWidth);
      this.scrollBarLeft = `${offsetLeft}px`;
      this.scrollBarWidth = `${offsetWidth}px`;
      if (index === 0) {
        this.$router.replace({ path: "/agent/news/systeminformation" });
      }
      if (index === 1) {
        this.$router.replace({ path: "/agent/news/announcement" });
      }
      if (index === 2) {
        this.$router.replace({ path: "/agent/news/activity" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.news-wrap {
  height: 100vh;
}
.header {
  @include w-h(100%, 1rem);
  ul {
    height: 100%;
    background: #fff;
    li {
      width: 200px;
    }
  }
}
.red {
  color: $red;
}
.bar-bottom {
  height: 3px;
  background: $red;
  bottom: 0;
  transition: 0.3s all;
}
.container-wrap {
  overflow-y: auto;
  background: #fff;
  margin-top: 0.13rem;
}
.news {
  @include w-h(6.9rem, 1.82rem);
  border-radius: 0.1rem;
  box-shadow: 0 0 10px 2px #e0dcdc;
  margin-top: 0.3rem;
}
.date {
  margin: 0.33rem 0 0.1rem 0.29rem;

  span {
    color: #999;
    font-size: 0.26rem;
  }
}
.news-title {
  color: #666;
  font-size: $fs28;
  margin: 0 0.46rem 0 0.29rem;
}
</style>
