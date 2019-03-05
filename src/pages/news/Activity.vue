<template>
  <div class="df fdc ac">
    <div class="list">
      <div class="img-wrap">
        <img src="./../../../static/img/activitybg.jpg" alt="">
      </div>
      <div class="container df">
        <div class="f1 information df fdc jsb">
          <p class="title">妆蕾活动日</p>
          <p class="introduction ellipsis1">活动活动活动活动活动活动活动活活动活动活动活动活动活动活动活</p>
          <div class="to-see df ac jc">
            <span>去看看</span>
            <svg class="icon" aria-hidden="true" style="color:#c90000">
              <use xlink:href="#icon-xiangyouyuanjiantouyoujiantouxiangyoumianxing"></use>
            </svg>
          </div>
        </div>
        <div class="status start df fdc jc ac">
          <p>06-13~06-14</p>
          <p>即将开始</p>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="img-wrap">
        <img src="./../../../static/img/activitybg.jpg" alt="">
      </div>
      <div class="container df">
        <div class="f1 information df fdc jsb">
          <p class="title">妆蕾活动日</p>
          <p class="introduction ellipsis1">活动活动活动活动活动活动活动活活动活动活动活动活动活动活动活</p>
          <div class="to-see df ac jc">
            <span>去看看</span>
            <svg class="icon" aria-hidden="true" style="color:#c90000">
              <use xlink:href="#icon-xiangyouyuanjiantouyoujiantouxiangyoumianxing"></use>
            </svg>
          </div>
        </div>
        <div class="status ing df fdc jc ac">
          <p>06-13~06-14</p>
          <p>即将开始</p>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="img-wrap">
        <img src="./../../../static/img/activitybg.jpg" alt="">
      </div>
      <div class="container df">
        <div class="f1 information df fdc jsb">
          <p class="title">妆蕾活动日</p>
          <p class="introduction ellipsis1">活动活动活动活动活动活动活动活活动活动活动活动活动活动活动活</p>
          <div class="to-see df ac jc">
            <span>去看看</span>
            <svg class="icon" aria-hidden="true" style="color:#c90000">
              <use xlink:href="#icon-xiangyouyuanjiantouyoujiantouxiangyoumianxing"></use>
            </svg>
          </div>
        </div>
        <div class="status end df fdc jc ac">
          <p>06-13~06-14</p>
          <p>即将开始</p>
        </div>
      </div>
    </div>
    <p style="text-indent:2em">
      
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.container-warp {
  overflow-y: auto;
  background: #fff;
  margin-top: 0.13rem;
}
.list{
  @include w-h(6.9rem,4.2rem);
  border-radius: 0.1rem;
  margin-top: 0.29rem;
  box-shadow: 0 2px 15px 1px #e4e3e3;
}
.img-wrap{
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  @include w-h(6.9rem,2.7rem);
  overflow-y: hidden;
  img{
    max-width: 100%;
    border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  }
}
.container{
  height: 1.5rem;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  padding-left: 0.2rem;


}
.status{
  @include w-h(2.3rem,1.5rem);
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
.start{
  color: $red;
  background: #ffeaea;
}
.information{
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
.ing{
  background: #c7edc3;
  color: #93DA48;
}
.end{
  background: #f0f0f0;
  color: #777;
}
.to-see{
  @include w-h(1.2rem,0.38rem);
  border-radius: 0.5rem;
  border: 1px solid $red;
  color: $red;
  font-size: 0.12rem;
  margin-bottom: 0.15rem;
}
.title{
  color: #444;
  font-size: $fs36;
  margin-top: 0.1rem;

}
.introduction{
  color: #999;
  font-size: $fs24;
}
</style>
