<template>
  <div class="mange-alipay df fdc ac">
    <div class="f1 container-wrap">
      <ul>
        <li class="account-wrap df fdc" v-for="(item,index) in alipayAccount" :key="index">
          <p class="df jsb">
            <span>{{item.name}}</span>
            <span>{{item.phone}}</span>
          </p>
          <div class="operating df f1">
            <div class="f1 df ac jc edit">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-bianji"></use>
              </svg>
              <span>编辑</span>
            </div>
            <div class="f1 df ac jc delete">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-shanchu"></use>
              </svg>
              <span>删除</span>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
    <div class="addWrap df ac jc">
      <div class="add df ac jc">添加支付宝账号</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      alipayAccount:[
        {name:'李文',phone:'13524687565'},
        {name:'李文',phone:'13524687565'},
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.mange-alipay {
  height: 100vh;
  background: #fff;
}
.container-wrap {
  overflow-y: auto;
  width: 100%;
  ul {
    background: #f5f5f5;
    padding-bottom: 0.13rem;
    & li:last-child{
        margin: 0;
    }
  }
}
.addWrap {
  height: 1rem;
}
.add {
  @include w-h(7.1rem,0.8rem);
  background: $red;
  color: #fff;
  border-radius: 0.04rem;
}

.account-wrap {
  height: 1.88rem;
  background: #fff;
  margin-bottom: 0.13rem;
  p{
      line-height: 0.94rem;
      padding: 0 0.3rem;
      @include border-bottom;
  }
}
.operating {
  padding: 0.13rem 0;
  color: $red;
  .icon{
      margin-right: 0.1rem;
  }
  .edit{
      border-right: 1px solid #eaeaea;
  }
}
</style>
