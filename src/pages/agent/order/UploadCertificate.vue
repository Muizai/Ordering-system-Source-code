<template>
  <div>
    <div class="remarks redtext">
      请确认您已经成功打款后再创建打款凭证，以下信息请一定认真填写
    </div>
    <ul class="receipt">
      <li class="df jsb">
        <span>收款人账户类型</span>
        <div class="df jc ac">
          <span>支付宝</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>

      </li>
      <li class="df jsb">
        <span>收款人账号</span>
        <input class="f1" type="text" placeholder="13524368859">

      </li>
    </ul>
    <p>打款金额</p>
    <ul>
      <li class="redtext">￥100.00</li>
    </ul>
    <p>打款账户名</p>
    <ul>
      <li>李先生</li>
    </ul>
    <p>打款账户</p>
    <ul>
      <li>13785246865</li>
    </ul>
    <div class="upload">
      <p>打款凭证</p>
      <div>
        <div class="img-wrap pr">
          <img src="./../../../../static/img/product.jpg" alt="">
          <div class="del pa">x</div>
        </div>

      </div>
      <div class="img-wrap pr">
        <img src="./../../../../static/img/product.jpg" alt="">
        <div class="del pa">x</div>
      </div>
      <div class="add-img df ac jc">
        +
      </div>
    </div>

  </div>

  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .remarks {
    padding: 0.3rem 0.32rem 0.3rem 0.19rem;
  }

  .receipt {
    .icon {
      @include w-h(0.22rem, 0.31rem);
      margin-left: 0.1rem;
    }

    & li:first-child {
      margin-bottom: 1px;
    }

    li {
      height: 1rem;
      line-height: 1rem;
      background: #fff;
    }
  }

  p {
    line-height: 0.8rem;
  }

  p,
  li {
    padding: 0 0.2rem;
    box-sizing: border-box;
  }

  li {
    background: #fff;
    height: 1rem;
    line-height: 1rem;
  }

  .upload {
    background: #fff;
    overflow: hidden;
    margin-top: 0.3rem;
  }

  .img-wrap {
    width: 1.2rem;
    margin: 0.16rem 0.21rem;
    float: left;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    .del {
      @include w-h(0.4rem, 0.4rem);
      border-bottom-left-radius: 75%;
      background: #bdbec1;
      top: 0;
      right: 0;
      text-align: center;
      color: #fff;
    }
  }

  .add-img {
    @include w-h(1.2rem, 1.2rem);
    font-size: 1.5rem;
    border: 1px dashed #ccc;
    font-weight: lighter;
    color: #f1f1f1;
    float: left;
    margin: 0.16rem 0.21rem;
  }

  input {
    text-align: right;
  }
</style>