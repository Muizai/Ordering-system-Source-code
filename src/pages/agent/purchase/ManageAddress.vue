<template>
  <div class="manageaddress fs32 df fdc">
    <ul class="f1">
      <li class="df fdc jc">
        <div
          class="df fdc jc fdcs"
          style="height:1.85rem"
        >
          <div class="df jsb">
            <span>李文</span>
            <span>15812356548</span>
          </div>
          <div class="fs28">收货地址：广东省佛上市佛上市佛上市佛上市佛上市佛上</div>
        </div>
        <div
          class="df ac jsb set"
          style="height:0.85rem"
        >
          <div class="df jc ac">
            <svg
              class="icon"
              aria-hidden="true"
              style="width:0.34rem;height:0.34rem;color:#ccc;"
            >
              <use xlink:href="#icon-xuanze1"></use>
            </svg>
            <span>设为默认</span>
          </div>
          <div class="df jc ac">
            <div class="df jc ac">
              <svg
                class="icon"
                aria-hidden="true"
                style="width:0.28rem;height:0.3rem"
              >
                <use xlink:href="#icon-bianji"></use>
              </svg>
              <span>编辑</span>
            </div>
            <div class="df jc ac">
              <svg
                class="icon"
                aria-hidden="true"
                style="width:0.28rem;heught:0.29rem"
              >
                <use xlink:href="#icon-shanchu"></use>
              </svg>
              <span>删除</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- 按钮 start -->
    <div class="add-wrap redbg whitetext ">
      <div class="add-address" @click="onAddAddress">
        添加新地址
      </div>
    </div>
    <!-- 按钮 end -->
  </div>
</template>

<script>
export default {
  methods:{
    onAddAddress(){
      this.$router.push({path:'address'});
    }
  }
};
</script>

<style lang="scss" scoped>
.manageaddress{
    height: 100vh;
}
.manageaddress ul{
    overflow-y: auto;
}
.manageaddress div {
  padding: 0.05rem 0.28rem;
  background: #fff;
}
.set {
  margin-top: 1px;
}
.icon {
  margin-right: 2px;
}
.manageaddress li {
  margin-bottom: 0.13rem;
}
.manageaddress .add-wrap {
  padding: 0.1rem 0.22rem;
  box-sizing: border-box;
  @include w-h(100%,1rem);
}
.manageaddress .add-address{
  background: $red;
  border-radius: 0.04rem;
  line-height: 0.8rem;
  text-align: center;

}
</style>
