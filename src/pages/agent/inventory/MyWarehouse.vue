<template>
  <div class="my-warehouse">
    <!-- 库存分类 start -->
    <div class="warehouse-list df ac jsb">
      <ul
        class="df jsb ac"
        style="width:100%"
      >
        <li
          v-for="(item,index) in warehouseList"
          :key="index"
          class="df fdc ac jc"
        >
          <div class="df ac jc"><svg
              class="icon"
              aria-hidden="true"
            >
              <use :xlink:href="item.icon"></use>
            </svg></div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <!-- 库存分类 end -->

    <!-- 趋势图 start -->
    <div class="data-trend df fdc ac jc">
      <p>云库存一周数据趋势图</p>
      <img
        src="./../../../../static/img/04.png"
        alt=""
      >
    </div>
    <!-- 趋势图 end -->

    <!-- 库存占比 start -->
    <div class="data-trend df fdc ac jc">
      <p>云库存一周数据趋势图</p>
      <img
        src="./../../../../static/img/05.png"
        alt=""
      >
    </div>
    <!-- 库存占比 end -->

    <!-- 立即提货 start -->
      <div class="pick-up df ac jc">立即提货</div>
    <!-- 立即提货 end -->

  </div>

</template>

<script>
export default {
  data() {
    return {
      warehouseList: [
        { icon: "#icon-1", name: "云库存" },
        { icon: "#icon-dingdan", name: "实体库存" },
        { icon: "#icon-kucun", name: "提货订单" },
        { icon: "#icon-bulumingxi", name: "库存明细" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.my-warehouse {
  .warehouse-list {
    padding: 0.4rem;
    box-sizing: border-box;
    background: #fff;
    ul {
      li {
        div {
          @include w-h(1.2rem, 1.2rem);
          background: #2a2a3a;
          border-radius: 50%;
          .icon {
            @include w-h(0.55rem, 0.47rem);
            color: #fff !important;
          }
        }
        p {
          margin-top: 0.1rem;
        }
      }
    }
  }
}
.data-trend {
  margin-top: 0.13rem;
  background: #fff;
  padding: 0.2rem;
  box-sizing: border-box;
  p {
    line-height: 0.5rem;
  }
  img {
    max-width: 100%;
    margin-top: 0.3rem;
  }
}
.pick-up {
  @include w-h(6.9rem, 0.8rem);
  background: $red;
  color: #fff;
  border-radius: 0.04rem;
  margin: 1rem auto;
}
.pick-up-wrap{
    background: #fff;
}
</style>
