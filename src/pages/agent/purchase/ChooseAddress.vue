<template>
  <div class="choose-address df fdc">
    <ul class="f1">
      <li class="df fdc ">
        <div class="df jsb fs32">
          <span>李文</span>
          <span>135856246852</span>
        </div>
        <div class="ellipsis2 f1 fs28 jfe"><span class="redtext">[默认地址]</span>收货地址：广东省佛上市佛上市佛上市佛上市佛上市佛上市佛上市广东省佛上市佛上市佛上市佛上市佛上市佛上市佛上市广东省佛上市佛上市佛上市佛上市佛上市佛上市佛上市</div>
      </li>
      <li class="df fdc ">
        <div class="df jsb fs32">
          <span>李文</span>
          <span>135856246852</span>
        </div>
        <div class="ellipsis2 f1 fs28 jfe"><span class="redtext">[默认地址]</span>收货地址：广东省佛上市佛上市佛上市佛上市佛上市佛上市佛上市广东省佛上市佛上市佛上市佛上市佛上市佛上市佛上市广东省佛上市佛上市佛上市佛上市佛上市佛上市佛上市</div>
      </li>
    </ul>
    <div class="change-address df jc ac">
      <div class="df jc ac" 
        @click="onManage"
      >管理地址</div>
      <div class="df ac jc redbg whitetext"
        @click="onAddAddress"
      >添加新地址</div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    onAddAddress(){
      this.$router.push({path:'address'});
    },
    onManage(){
      this.$router.push({path:'manageaddress'});
    }
  }
};
</script>

<style lang="scss" scoped>
.choose-address {
  height: 100vh;
}
.choose-address ul {
  overflow-y: auto;
}
.choose-address ul li {
  height: 1.82rem;
  margin-bottom: 1px;
  background: #fff;
  padding: 0.28rem;
  box-sizing: border-box;
}
.change-address {
  height: 1rem;
  background: #fff;
}
.change-address div:first-child {
  @include w-h(3rem, 0.8rem);
  border-radius: 0.04rem;
  border: 1px solid #999;
  margin-right: 1%;
}
.change-address div:nth-child(2) {
  @include w-h(4.14rem, 0.8rem);
  border-radius: 0.04rem;
}
</style>
