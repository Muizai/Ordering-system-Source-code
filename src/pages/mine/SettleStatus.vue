<template>
  <div class="settle-status">
    <div class="header  pr">
      <ul
        class="df"
        ref="ulList"
      >
        <li
          v-for="(item,index) in headerList"
          @click="onItem(index,$event)"
          :key="index"
          class="df jc ac item"
          v-wechat-title="$route.meta.title"
          :class="{red:selectId===index}"
        >{{item}}</li>
      </ul>
      <div
        class="scroll-bar pa"
        :style="{width:scrollWidth,left:scrollLeft}"
      ></div>
    </div>
    <div>
      <ul class="list">
        <li
          class="df jsb"
          v-for="(item,index) in liList"
          :key="index"
        >
          <div class="df fdc jsb">
            <div class="title">{{item.titleText}}</div>
            <div class="date">{{item.date}}</div>
          </div>
          <div class="df ac jc">{{item.price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: ["待结算", "已结算", "结算失败"],
      liList: [
        { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
        { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
        { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
        { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
        { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" }
      ],
      selectId: 0,
      scrollWidth: 0,
      scrollLeft: 0
    };
  },
  mounted() {
    this.scrollWidth = `${this.$refs.ulList.firstElementChild.clientWidth}px`;
  },
  methods: {
    onItem(index, e) {
      this.selectId = index;
      const { clientWidth, offsetLeft } = e.target;
      this.scrollWidth = `${clientWidth}px`;
      this.scrollLeft = `${offsetLeft}px`;
      switch (index) {
        case 0:
          this.liList = [
            { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "待结算", date: "2018-05-21 12:00", price: "500.00" }
          ];
          this.$route.meta.title="待结算";
          break;
        case 1:
          this.liList = [
            { titleText: "已结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "已结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "已结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "已结算", date: "2018-05-21 12:00", price: "500.00" },
            { titleText: "已结算", date: "2018-05-21 12:00", price: "500.00" }
          ];
          this.$route.meta.title="已结算";
          break;
        case 2:
          this.liList = [
            {
              titleText: "结算失败",
              date: "2018-05-21 12:00",
              price: "500.00"
            },
            {
              titleText: "结算失败",
              date: "2018-05-21 12:00",
              price: "500.00"
            },
            {
              titleText: "结算失败",
              date: "2018-05-21 12:00",
              price: "500.00"
            },
            {
              titleText: "结算失败",
              date: "2018-05-21 12:00",
              price: "500.00"
            },
            { titleText: "结算失败", date: "2018-05-21 12:00", price: "500.00" }
          ];
          this.$route.meta.title="结算失败";


      }
    }
  }
};
</script>

<style lang="scss" scoped>
.settle-status {
  background: #fff;
  height: 100vh;
}
.header {
  height: 1rem;
  @include border-bottom;
  ul {
    height: 100%;
  }
}
.item {
  width: 33.33333333%;
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
.list {
  padding: 0.26rem;
  box-sizing: border-box;
  height: 1.8rem;
  li {
    height: 100%;
    @include border-bottom;
  }
}
.title {
  color: #444;
  margin-top: 0.1rem;
  font-size: $fs30;
  font-weight: bold;
}
.date {
  color: #999;
  font-size: $fs24;
  margin-bottom: 0.3rem;
}
</style>
