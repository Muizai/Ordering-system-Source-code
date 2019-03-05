<template>
  <div class="bulletBox df fdc">

    <div>
      <div
        @click="onbulletBox"
        class="bulletBox-btn df jc ac"
      >{{btnText}}</div>
      <div
        class="bulletBoxContainer"
        ref="bulletBoxContainer"
      >
        <div class="shadow"></div>
        <div
          v-if="type==='toast'"
          class="containerWrap pa df ac jc"
          ref="toast"
        >
          <div class="toastContainer df fdc  jc ac">
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xuanze1"></use>
            </svg>
            <p>{{tipText}}</p>
          </div>
        </div>
        <div
          v-if="type==='submit'"
          class="containerWrap pa df ac jc confirmWarp"
        >
          <div
            class="confirmContainer df fdc  jc ac"
            ref="confirm"
          >
            <div class="confirmText df jc ac">{{message}}</div>
            <div
              class="df f1 YoN"
            >
              <div
                class="f1 df jc ac cancel"
                @click="onCancel"
              >取消</div>
              <div
                class="f1 df jc ac redtext"
                @click="onSure"
              >确定</div>
            </div>
          </div>
          <div
            class="toastContainer df fdc  jc ac confirm_toast"
            ref="confirm_toast"
          >
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-xuanze1"></use>
            </svg>
            <p>{{tipText}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tipText: { type: String, default: "确认收货成功" },
    btnText: { type: String, default: "确认收货" },
    type: { type: String, default: "toast" },
    message: { type: String, default: "确认已收到货物？" }
  },
  methods: {
    onbulletBox() {
      this.$refs.bulletBoxContainer.style.display = "block";
      if (this.$refs.confirm_toast) {
        this.$refs.confirm.style.display = "flex";
        this.$refs.confirm_toast.style.display = "none";
      }

      const _this = this;
      if (this.type === "toast") {
        setTimeout(function() {
          _this.$refs.bulletBoxContainer.style.display = "none";
        }, 3000);
      }

      this.$emit("onbulletBox");
    },
    onCancel() {
      this.$refs.bulletBoxContainer.style.display = "none";
    },
    onSure() {
      this.$refs.confirm.style.display = "none";
      this.$refs.confirm_toast.style.display = "block";
      this.$refs.confirm_toast.style.display = "flex";
      const _this = this;
      setTimeout(function() {
        _this.$refs.bulletBoxContainer.style.display = "none";
      }, 3000);
    }
  },
};
</script>

<style lang="scss" scoped>
.bulletBox {
  .bulletBox-btn {
    width: 1.98rem;
    height: 0.62rem;
  }
}
.bulletBoxContainer {
  display: none;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: #444;
  .shadow {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.containerWrap {
  
  width: 100%;
  top: 30vh;
  .toastContainer {
    width: 3.94rem;
    height: 2.42rem;
    background: #fff;
    border-radius: 0.1rem;
    .icon {
      width: 0.64rem;
      height: 0.64rem;
      color: #c90000;
      margin-bottom: 0.2rem;
    }
  }
  .confirmContainer {
    width: 5.86rem;
    height: 3.6rem;
    background: #fff;
    border-radius: 0.1rem;
    .confirmText {
      height: 2.6rem;
    }
    & > div {
      width: 100%;
    }
  }
}
.confirmWarp {
  .confirm_toast {
    display: none;
  }
}
.cancel {
  color: #ccc;
  border-right: 1px solid #e4e4e4;
}
.YoN{
  border-top:1px solid #E4E4E4
}
</style>
