<template>
  <div class="withdrawing">
    <div>
      <ul class="withdraw-container">
        <li v-for="(item,index) in withDrawList" :class="{liBorder:selectId===0}">
          <div class="df jsb container">
            <div class="">
              <p class="withdraw-way">采购订单-采购收入</p>
              <p class="user">
                <span>订单编号：{{item.order}}</span>
              </p>
              <p class="date">{{item.date}}</p>
            </div>
            <div class="redtext df ac jc">- {{item.amount}}</div>
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
      headerList: ["提现中", "已提现", "已失效"],
      selectId: 0,
      scrollWidth: "2rem",
      scrollLeft: 0,
      selectId: 0,
      withDrawList: [
        {
          name: "李文",
          order: "174589623568",
          amount: "500.00",
          date: "2018-05-21 12:00"
        },
        {
          name: "李看手机文",
          order: "174589623568",
          amount: "500.00",
          date: "2018-05-21 12:00"
        },
        {
          name: "李欧辰文",
          order: "174589623568",
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
.scrollBar {
  height: 3px;
  background: $red;
  bottom: 0;
  transition: 1s all;
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
