<template>
  <div class="recharge">
    <div
      class="header pr"
      ref="header"
    >
      <ul
        class="df"
        ref="ulWrap"
      >
        <li
          class="df ac jc f1"
          v-for="(item,index) in headerList"
          :key="index"
          :class="{red:selectId===index}"
          @click="onItem(index,$event)"
        >{{item}}</li>
      </ul>
      <div
        class="scroll-bar pa"
        :style="{width:scrollWidth,left:scrollLeft}"
      ></div>
    </div>
    <div class="container-wrap">
      <ul>
        <li
          v-for="(item,index) in containerList"
          class="df jsb"
        >
          <div class="df fdc jsb">
            <p class="account" v-if="selectId===0">待审批货款</p>
            <p class="account" v-if="selectId===1">已充值货款</p>
            <p class="account" v-if="selectId===2">已失效货款</p>
            <p class="order">单号：{{item.order}}</p>
            <p class="date">{{item.date}}</p>
          </div>
          <div class="df ac jc redtext">{{item.price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: [
        "待审核",
        "已充值",
        "已失效",
      ],
      selectId: 0,
      scrollWidth: 0,
      scrollLeft: 0,
      containerList: [
        { order: "785566245632", date: "2018-05-21 12:00", price: "500.00" },
        { order: "785566245632", date: "2018-05-21 12:00", price: "500.00" },
        { order: "785566245632", date: "2018-05-21 12:00", price: "500.00" }
      ]
    };
  },
  mounted() {
    this.scrollWidth = `${this.$refs.ulWrap.firstElementChild.clientWidth}px`;
  },
  methods: {
    onItem(index, e) {
      this.selectId = index;
      const { clientWidth, offsetLeft } = e.target;
      this.scrollWidth = `${clientWidth}px`;
      this.scrollLeft = `${offsetLeft}px`;

      // jQuery动画
      $(this.$refs.header).animate({
        scrollLeft: offsetLeft - window.innerWidth / 2
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.recharge{
    height: 100vh;
    background: #fff;
}
.header {
  @include border-bottom;
  overflow-x: auto;
  white-space: nowrap;
  li {
    height: 1rem;
    padding: 0 0.2rem;

  }
  .scroll-bar {
    height: 3px;
    background: $red;
    bottom: 0;
    transition: 0.3s all; //过渡
  }
}
.header::-webkit-scrollbar {
  display: none;
}
.red {
  color: $red;
}

.container-wrap {
  padding: 0 0.2rem;

  li {
  @include border-bottom;
    padding: 0.2rem 0;

  }
}
.account{
    font-size: $fs30;
    color: #444;
    font-weight: 500;
}
.order{
    color: #444;
    font-size: $fs24;
    margin-top: 0.1rem;
}
.date{
    color: #999;
    font-size: $fs24;
    margin-top: 0.05rem;
}
</style>
