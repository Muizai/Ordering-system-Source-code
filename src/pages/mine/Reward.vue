<template>
  <div class="reward">
    <!-- 总奖励 -->
    <div class="total-reward df jsb ac">
      <div class="df fdc">
        <p>总奖励（元）</p>
        <p class="large">3000.00</p>
      </div>
      <div class="df fdc">
        <p class="df jfe">昨日奖励</p>
        <p class="redtext large">+300.00</p>
      </div>
    </div>
    <!-- 总奖励 -->

    <!-- 奖励分类 -->
    <div class="reward-category">
      <ul class="df fw">
        <li
          v-for="(item,index) in rewardCategoryList"
          :key="index"
          class="df fdc jc afs"
          :class="{borderRight:index%2===0}"
        >
          <p class="category">{{item.category}}</p>
          <p class="count">{{item.count}}</p>
        </li>
      </ul>
    </div>
    <!-- 奖励分类 -->

    <!-- 线下奖励 -->
    <div class="offline-reward">
      <p class="title df ac "><span class="red-border"></span>线下奖励</p>
      <ul class="df ">
        <li
          v-for="(item,index) in offlineList"
          class="df fdc f1 ac jc"
        >
          <p class="count">￥{{item.count}}</p>
          <p class="status">{{item.status}}</p>
        </li>
      </ul>
    </div>
    <!-- 线下奖励 -->

    <!-- 提取支出账户 -->
    <div class="account">
      <div class="extract df jsb ac">
        <div class="df ac">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-tiqu"></use>
          </svg>
          <span>提取奖励账户</span>
        </div>
        <div class="df ac">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>

      </div>
      <div class="expenditure df jsb ac">
        <div class="df ac">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-zhichu1"></use>
          </svg>
          <span>提取奖励账户</span>
        </div>
        <div class="df ac">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>

      </div>

    </div>
    <!-- 提取支出账户 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      rewardCategoryList: [
        { category: "邀请一次性奖励", count: "2423.00" },
        { category: "邀请订单奖励", count: "2423.00" },
        { category: "升级订单奖励", count: "2423.00" },
        { category: "顶级平推奖励", count: "2423.00" },
        { category: "非顶级平推奖励", count: "2423.00" },
        { category: "月度业绩奖励", count: "2423.00" }
      ],
      offlineList: [
        { status: "待结算", count: "0.00" },
        { status: "提现中", count: "0.00" },
        { status: "货款充值中", count: "0.00" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.total-reward {
  height: 2.2rem;
  background: url("./../../../static/img/reward-number.png") #fff no-repeat;
  padding: 0 0.3rem;
}
.reward-category {
  background: #fff;
  li {
    padding: 0 0.3rem;
    height: 1.4rem;
    width: 50%;
    @include border-bottom;
    box-sizing: border-box;
    .category {
      font-size: $fs28;
      color: #444;
    }
    .count {
      font-size: $fs28;
      color: #999;
      margin-top: 0.1rem;
    }
  }
  li.borderRight {
    border-right: 1px solid #eaeaea;
  }
}
.large {
  font-size: 0.46rem;
  font-weight: bold;
  margin-top: 0.1rem;
}
.offline-reward {
  margin-top: 0.13rem;
  .title {
    height: 0.7rem;
    background: #fff;
    @include border-bottom;
    padding-left: 0.3rem;
  }
  ul {
    background: #fff;
    height: 1.4rem;
    padding: 0.2rem 0;
    box-sizing: border-box;
    li {
      border-right: 1px solid #eaeaea;
    }
  }
  ul li:last-child {
    border: 0;
  }
  .count {
    font-size: 0.34rem !important;
    color: #444;
  }
  .status {
    font-size: $fs24;
    color: #999;
    margin-top: 0.1rem;
  }
}
.red-border {
  @include w-h(0.06rem, 0.26rem);
  background: $red;
  display: inline-block;
  margin-right: 0.1rem;
}
.account {
  background: #fff;
  margin-top: 0.13rem;
}
.extract div {
  height: 0.93rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.expenditure div {
  height: 0.93rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.account div:first-child {
  @include border-bottom;
}
.extract div:first-child {
  .icon {
    color: $red !important;
    width: 0.34rem;
    height: 0.34rem;
    @include w-h(0.34rem, 0.34rem);
    margin-right: 0.1rem;
  }
}
.expenditure div:first-child {
  .icon {
    color: $red !important;
    @include w-h(0.34rem, 0.34rem);
    margin-right: 0.1rem;
  }
}
</style>
