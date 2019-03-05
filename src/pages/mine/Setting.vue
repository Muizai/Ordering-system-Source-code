<template>
  <div class="setting">

    <!-- 清除缓存提示 -->
    <div
      class="change-img-wrap pa "
      ref="changeImg"
    >
      <div class="shadow"></div>
      <div class="change-img pa df fdc jc ac">
        <div class="df f1 change-way">
          <div class="f1 df fdc ac jc ">
            <svg
              class="icon take-photo"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xiangji1"></use>
            </svg>
            <span>拍照</span>
          </div>
          <div class="f1 fdc df ac jc">
            <svg
              class="icon photo"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xiangce"></use>
            </svg>
            <span>相册</span>
          </div>
        </div>
        <div
          class="df ac jc cancel"
          @click="cancel"
        >取消</div>
      </div>
    </div>
    <!-- 清除缓存提示 -->

    <!-- 修改资料 -->
    <ul>
      <li
        class="first df jsb jc ac pr"
        @click="onChangeImg"
      >
        <span>更改头像</span>
        <div class="df ac jc">
          <div
            class=""
            style="width:1.16rem;height:1.16rem;border-radius:50%;margin-right:0.2rem"
          >
            <img
              src="./../../../static/img/agent-img.jpg"
              style=" max-width:100%;border-radius:50%;max-height:100%"
              alt=""
            >
          </div>
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-arrowright"></use>
          </svg>
        </div>
      </li>
      <li
        class="df jsb jc ac"
        v-for="(item,index) in settingList"
        @click="onList(item.path)"
        :key="index"
      >
        <span>{{item.text}}</span>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </li>
    </ul>

    <!-- 清除缓存 -->
    <ul>
      <li class="df jsb jc ac">
        <Toast
          type="submit"
          btnText="清除缓存"
          message="确定要清除缓存？"
          tipText="清除缓存成功"
        >
        </Toast>
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-arrowright"></use>
        </svg>
      </li>
    </ul>
    <!-- 清除缓存 -->

    <!-- 退出登录 -->
    <p>退出登录</p>
    <!-- 退出登录 -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      settingList: [
        { text: "个人信息", path: "settingpersonnalinformation" },
        { text: "修改密码", path: "changepassword1" },
        { text: "常用发货快递", path: "commonlogistics" },
        { text: "收货地址", path: "chooseaddress" },
        { text: "关注商家公众号", path: "follow" }
      ]
    };
  },
  methods: {
    onChangeImg() {
      this.$refs.changeImg.style.display = "block";
    },
    cancel() {
      this.$refs.changeImg.style.display = "none";
    },
    onList(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>
<style lang="scss" scoped>
.setting {
  font-size: $fs28;
}
.setting ul {
  padding: 0 0.2rem;
  box-sizing: border-box;
  font-size: $fs28;
  background: #fff;
  margin-bottom: 0.2rem;
}
.setting .first {
  height: 1.7rem;
  line-height: 1.7rem;
}
.setting li {
  height: 0.94rem;
  @include border-bottom;
  line-height: 0.94rem;
}
.icon {
  @include w-h(0.3rem, 0.3rem);
}
p {
  height: 0.94rem;
  background: #fff;
  text-align: center;
  line-height: 0.94rem;
  color: $red;
  margin-top: 0.8rem;
}
.change-img-wrap {
  display: none;
  @include w-h(100%, 100vh);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  .shadow {
    background: $shadow;
    @include w-h(100%, 100%);
  }
  .change-img {
    @include w-h(100%, 3.3rem);
    background: #fff;
    bottom: 0;
    .change-way {
      width: 100%;
    }
    .cancel {
      @include w-h(100%, 0.9rem);
      border-top: 1px solid #333333;
      color: #444;
      font-size: $fs30;
    }
    .take-photo {
      @include w-h(0.65rem, 0.54rem);
      margin-bottom: 0.1rem;
    }
    .photo {
      @include w-h(0.58rem, 0.51rem);
      margin-bottom: 0.1rem;
    }
  }
}
/deep/.bulletBox {
  width: 100%;
}
/deep/.bulletBox .bulletBox-btn {
  justify-content: flex-start;
  width: 100% !important;
}
</style>