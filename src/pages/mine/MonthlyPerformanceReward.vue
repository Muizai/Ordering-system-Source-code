<template>
  <div class="monthly-performance-reward ">

    <!-- 当前月份累计奖励 start -->
    <div class="selected-time df jsb ac">
      <span>2018年6月</span>
      <svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-riliriqi"></use>
      </svg>
    </div>
    <div class="total df fdc ac jc">
      <p class="redtext">300.00</p>
      <p>累计奖励</p>
    </div>
    <!-- 当前月份累计奖励 end -->

    <div class="detail-wrap">
      <ul>
        <li
          class="df jsb ac"
          v-for="(item,index) in performanceList"
        >
          <span>{{item.month}}月业绩余额</span>
          <span class="redtext">+{{item.count}}</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      performanceList: [
        { month: "6", count: "300.00" },
        { month: "5", count: "300.00" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.monthly-performance-reward {
  height: 100vh;
  .selected-time {
    background: #fff;
    height: 1rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    span {
      font-size: $fs28;
      color: #444;
    }
    .icon {
      @include w-h(0.33rem, 0.32rem);
    }
  }
}
.total {
  @include w-h(7.5rem, 2.1rem);
  background: url("./../../../static/img/reward-number.png") #fff no-repeat
    center center;
  background-size: cover;
}
.detail-wrap {
  margin-top: 0.13rem;
  background: #fff;
  ul {
    li {
      height: 1rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      @include border-bottom;
    }
  }
}
</style>
