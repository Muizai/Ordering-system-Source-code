<template>
  <div class="my-order df fdc">

    <!-- 订单状态导航 start -->
    <div class="order-nav pr">
      <ul
        class="fs28 df jsb whitebg"
        ref="orderNavUl"
      >
        <li
          v-for="(item,index) in orderNavList"
          :key="index"
          class="df jc ac"
          @click="onClickItem(index,$event)"
          :class="{red:itemSelected===index}"
        >{{item}}</li>
      </ul>
      <div
        class="scroll-bar redbg pa"
        :style="{width:scrollBarWidth,left:scrollBarLeft}"
      ></div>
    </div>
    <!-- 订单状态导航 end -->

    <!-- 搜索订单 start -->
    <div class="order-wrap f1">
      <div
        class="search-order df jc ac"
        ref="searchOrder"
      >
        <div class="df">
          <div
            class="df ac jc"
            style="margin-left:0.2rem"
          >
            <svg
              class="icon"
              aria-hidden="true"
              style="width:0.34rem;height:0.34rem;color:#ccc;"
            >
              <use xlink:href="#icon-sousuo"></use>
            </svg>
          </div>
          <input
            type="text"
            placeholder="搜索订单"
          >
        </div>
      </div>
      <!-- 搜索订单 end -->

      <!-- 所有订单 start -->
      <div style="background:#fff">
        <router-view></router-view>
      </div>
      <!-- 所有订单 end -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderNavList: ["全部", "待确认", "待付款", "待发货", "待收货"],
      scrollBarWidth: 0,
      scrollBarLeft: 0,
      itemSelected: 0,
      orderList: ["sds"]
    };
  },
  mounted() {
    let firstItem = this.$refs.orderNavUl.firstElementChild;
    this.scrollBarWidth = `${firstItem.offsetWidth}px`;
    this.scrollBarLeft = `${firstItem.offsetLeft}px`;
    this.$router.replace({ path: "/myorder?index=0" });
    if (!this.orderList.length) {
      this.$router.replace({ path: "/myorder/nothing" });
    } else {
      this.$router.replace({ path: "/myorder/myorderlist" });
    }
    if (!this.orderList.length) {
      this.$refs.searchOrder.style.display = "none";
    }
  },
  methods: {
    onClickItem(index, e) {
      this.itemSelected = index;
      const { offsetWidth, offsetLeft } = e.target;
      this.scrollBarWidth = `${offsetWidth}px`;
      this.scrollBarLeft = `${offsetLeft}px`;
      const { path, query } = this.$route;
      this.$router.replace({ path, query: { ...query, index } });
    }
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  height: 100vh;
}
.order-nav ul {
  padding: 0 0.29rem 0 0.43rem;
}
.order-nav li {
  line-height: 1rem;
}
.order-wrap {
  margin-top: 2px;
  overflow-y: auto;
}
.scroll-bar {
  bottom: -1px;
  transition: 0.3s all;
  @include w-h(0.5rem,3px);
}
.red {
  color: #c90000;
}
.search-order {
  background: #f9f9f9;
  height: 1.1rem;
  color: #ccc;
}
.search-order > div {
  @include w-h(6.9rem,0.7rem);
  background: #fff;
  border-radius: 0.1rem;
  border: 1px solid #dbdbdb;
  input {
    color: #dbdbdb;
    margin-left: 0.2rem;
  }
}
</style>
