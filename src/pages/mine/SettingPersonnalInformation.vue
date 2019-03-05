<template>
  <div class="personnal-information">
    <ul>
      <li class="df jsb jc ac">
        <span>微信号</span>
        <span>1111</span>
      </li>
      <li class="df jsb jc ac">
        <span>姓名</span>
        <span>AT</span>
      </li>
      <li class="df jsb jc ac">
        <span>身份证号码</span>
        <span>45212562323523612595</span>
      </li>
      <li class="df jsb jc ac">
        <span>身份证照片</span>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </li>
    </ul>
    <ul class="phone">
      <li class="df jsb jc ac">
        <span>手机号码</span>
        <span>13435553238</span>
      </li>
      <li class="df jsb jc ac">
        <span>性别</span>
        <div>
          <span>女</span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
      <li class="df jsb jc ac">
        <span>性别</span>
        <div>
          <span>女</span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
      <li class="df jsb jc ac">
        <span>出生年月</span>
        <div>
          <span>1991.05</span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
      <li class="df jsb jc ac">
        <span>学历</span>
        <div>
          <span>未选择</span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
      <li class="df jsb jc ac">
        <span>地区</span>
        <div>
          <span>中国-北京-东城</span>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>

    </ul>
    <div class="df ac jc save">保存</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.personnal-information {
  font-size: $fs28;
}
ul {
  background: #fff;
  & li:last-child {
    border: none;
  }
}
li {
  margin: 0 0.2rem;
  height: 0.94rem;
  @include border-bottom;
}
.save {
  height: 0.94rem;
  background: #fff;
  color: $red;
  font-size: $fs28;
  margin-top: 0.6rem;
}
.phone {
  margin-top: 0.2rem;
}
</style>
