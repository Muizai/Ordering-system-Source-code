<template>
  <div class="address pr df fdc ac">
    <form action="">
      <ul>
        <li style="padding-bottom:0.3rem">
          <p class="intelligent-address">智能地址<span>(在下方粘贴整段地址信息，系统自动识别)</span></p>
          <textarea name="" id="" cols="30" rows="10" placeholder="例：微小妹，13715648741，广州市天河区大厦大厦(特别说明：若要识别度高，请用逗号隔开姓名、电话和地址)"></textarea>

        </li>
        <li style="line-height:0.92rem;padding-left:0.22rem">
          收货人
        </li>
        <li style="line-height:0.92rem;padding-left:0.22rem">
          联系电话
        </li>
        <li style="line-height:0.92rem;padding-left:0.22rem" class="pr">
          所在地区
          <svg class="icon pa" aria-hidden="true" style="width:0.3rem;height:0.3rem;right:0.22rem;top:0.355rem">
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </li>
        <li style="line-height:0.92rem;padding-left:0.22rem;height:1.8rem">
          详细地址
        </li>
      </ul>
    </form>
    <Toast btnText="确认"></Toast>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        let tip = document.getElementById("tip");
        tip.style.display = "block";
        tip.style.top =
          (document.documentElement.scrollTop || document.body.scrollTop) + "px";
      }
    }
  };
</script>

<style lang="scss" scoped>
  /deep/.bulletBox .bulletBox-btn {
    width: 6.3rem !important;
    height: 0.8rem !important;
    background: $red;
    color: #fff;
    border-radius: 0.04rem;
    margin-top: 0.88rem;
  }

  .address {
    font-size: 0.28rem;

    li {
      @include border-bottom;
    }
  }

  form {
    width: 100%;
    background: #fff;
  }

  textarea {
    background: #fafafa;
    @include w-h(7.1rem, 1.8rem);
    margin: 0 auto;
    border: none;
    margin-left: 0.21rem;
    outline: none;
  }

  .intelligent-address {
    margin-left: 0.21rem;
    padding: 0.3rem 0;
    box-sizing: border-box;
    font-size: $fs28;

    span {
      font-size: $fs24;
      color: #999999;
    }
  }

  .confirm {
    @include w-h(6.9rem, 0.8rem);
    background: $red;
    line-height: 0.8rem;
    color: #fff;
    text-align: center;
    margin: 1rem auto 0;
    font-size: $fs30;
    border-radius: 0.04rem;
  }

  .tip {
    background: #000;
    opacity: 0.3;
    width: 100vw;
    height: 100vh;
    @include w-h(100vw, 100vh);
    position: absolute;
    top: 0;
    display: none;
  }

  .tip>div {
    @include w-h(100%, 100%);

    div {
      @include w-h(5.86rem, 3.6rem);
      background: #fff;
      border-radius: 0.1rem;
      z-index: 999;
    }
  }
</style>