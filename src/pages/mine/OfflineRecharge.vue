<template>
  <div class="withdrawing">
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
    <div>
      <ul class="withdraw-container">
        <li v-for="(item,index) in withDrawList" :class="{liBorder:selectId===0}">
          <div class="df jsb container">
            <div class="">
              <p class="withdraw-way">申请提现-支付宝</p>
              <p class="user">
                <span>账户名：{{item.name}}</span>
                <span>收款账号：{{item.account}}</span>
              </p>
              <p class="date">{{item.date}}</p>
            </div>
            <div class="redtext df ac jc">{{item.amount}}</div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: ["待审核", "已充值", "已失效"],
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
    }
  }
};
</script>

<style lang="scss" scoped>
.withdrawing {
    height: 100vh;
    background: #fff;
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
  @include w-h(1.98rem,0.62rem);
  border: 1px solid $red;
  margin: 0.2rem 0;
}
.withdraw-container li {
  padding: 0 0.2rem;
  background: #fff;
}

.withdraw-way {
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
.container {
  padding: 0.2rem 0;
  @include border-bottom;
}
</style>
