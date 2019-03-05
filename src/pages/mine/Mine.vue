<template>
  <div>
    <div class="mine-header">
      <div class="mine-message">
        <div class="mine-img">
          <img
            src="./../../../static/img/agent-img.jpg"
            alt=""
          >
        </div>
        <p>ATREUS</p>
     
        <svg
          class="icon"
          aria-hidden="true"
          @click="onSet"
        >
          <use xlink:href="#icon-shezhi1"></use>
        </svg>
      </div>
      <div class="account">
        <div class="withdraw-account df fdc ac jc" @click="onCanWithdraw">
          <p>￥<span>3000.00</span></p>
          <p style="font-size:0.24rem">可提现账户</p>
        </div>
        <div class="payment-account df fdc ac jc" @click="onPayment">
          <p>￥<span>3000.00</span></p>
          <p style="font-size:0.24rem">货款账户</p>
        </div>
      </div>
    </div>
    <div class="mine-container">
      <ul>
        <li v-for="(item,index) in mineList"  @click="onList(item.path)">
          <i class="icon iconfont icon-order" :class="item.icon"></i>
          <span>{{item.text}}</span>
          <i class="icon iconfont icon-arrowright"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      mineList:[
        {icon:'icon-maijiabz',text:'保证金',path:'/guaranty_n'},
        {icon:'icon-wxbzhanghu',text:'收款账号',path:'/accountnum'},
        {icon:'icon-iconfontbaozhuang',text:'内购商城',path:''},
        {icon:'icon-cart',text:'内购订单',path:''},
        {icon:'icon-phone',text:'联系总部',path:''},
        {icon:'icon-comments',text:'在线留言',path:'/onlinemessage'},
      ]
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    onSet(){
      this.$router.push({path:'/setting'})
    },
    onList(path){
      this.$router.push({path:path});

    },
    onCanWithdraw(){
      this.$router.push({path:'/canwithdraw'});
    },
    onPayment(){
      this.$router.push({path:'/paymentaccount'});
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style lang="scss" scoped>
.mine-header {
  @include w-h(100%,4.18rem);
  background: url("./../../../static/img/my-user.jpg") no-repeat;
  background-size: 100% 100%;
}
.mine-message {
  height: 3.08rem;
  position: relative;
  .icon {
    color: #fff;
    position: absolute;
    right: 0.3rem;
  @include w-h(0.36rem,0.36rem);
    top:0.3rem;
  }
}
.mine-message > p {
  font-size: $fs36;
  text-align: center;
  color: #fff;
}
.mine-img {
  @include w-h(1.2rem,1.2rem);
  border-radius: 50%;
  margin: 0 auto 0.33rem;
  padding-top: 0.52rem;
}
.mine-img img {
  width: 100%;
  height: 100%;
  @include w-h(100%,100%);
  border-radius: 50%;
}
.account {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  height: 1.1rem;
  padding: 1.5% 0;
  box-sizing: border-box;
}
.account > div {
  font-size: $fs36;
  float: left;
  color: #fff;
  box-sizing: border-box;
  @include w-h(50%,100%);

}
.withdraw-account {
  border-right: 1px solid #fff;
}
.icon-shezhi {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
  color: #fff;
  font-size: $fs36;
}
.icon-order {
  color: $red;
  font-size: $fs36 !important;
  margin-right: 0.2rem;
}
.mine-container {
  font-size: $fs30;
}
.mine-container li {
  height: 1.1rem;
  background: #fff;
  margin-top: 1px;
  padding: 0.35rem;
  box-sizing: border-box;
  text-align: left;
  position: relative;
}
.mine-container li > i,
.mine-container li > span {
  vertical-align: middle;
}
.icon-arrowright {
  position: absolute;
  right: 0.4rem;
  font-size: $fs36;
}
</style>