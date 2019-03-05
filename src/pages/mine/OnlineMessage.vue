<template>
  <div class="online-message df fdc ac">
    <div class="message">
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="请简要描述您的问题与意见"
      ></textarea>
      <div class="df fw  add-img-wrap">
        <div class="img-wrap pr">
          <img
            src="./../../../static/img/agent-img.jpg"
            alt=""
          >
          <svg class="icon pa" aria-hidden="true">
              <use xlink:href="#icon-guanbi-"></use>
          </svg>
        </div>
        <div class="add-img">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-renzhengicontijiaofujianshangchuanzhaopian"></use>
          </svg>
        </div>
      </div>
    </div>
    <Toast btnText="提交" tipText="您的反馈已成功"></Toast>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.online-message {
  height: 100vh;
  background: #fff;
}
.message {
  width: 6.9rem;
  border: 1px solid #dbdbdb;
  border-radius: 0.04rem;
  margin-top: 0.3rem;

  textarea {
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    padding: 0.2rem;
    box-sizing: border-box;
  }
}
/deep/.bulletBox .bulletBox-btn {
  width: 6.9rem !important;
  height: 0.8rem !important;
  background: #c90000;
  color: #fff;
  border-radius: 0.04rem;
  margin-top: 2.21rem;
}
.img-wrap {
  @include w-h(0.9rem,0.9rem);
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .icon{
      top: 0;
      right: 0;
      z-index: 999;
  }
}
.add-img {
  .icon {
  @include w-h(0.9rem,0.9rem);
    color: #cbcbcb;
  }
}
.add-img-wrap {
  & > div {
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
  }
}
</style>
