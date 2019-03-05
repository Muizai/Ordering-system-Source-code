<template>
  <div class="agent-apply-manage">
    <div class="nav-wrap pr">
      <ul
        class="df"
        ref="navUl"
      >
        <li
          v-for="(item,index) in navList"
          :key="index"
          class="f1 df ac jc"
        >
          <span
            :class="{redtext:index===selectId}"
            @click="onList(index,$event)"
          >{{item}}</span>
        </li>
      </ul>
      <div
        class="scroll-bar pa"
        :style="{width:scrollWidth,left:scrollLeft}"
      ></div>
    </div>
    <div
      v-if="selectId===0"
      class="apply-list-wrap"
    >
      <ul>
        <li
          v-for="(item,index) in applyList"
          :key="index"
          class="df jsb"
        >
          <div class="df fdc jsb information">
            <p class="redtext">ATREUS-总代</p>
            <p>姓名：{{item.name}}</p>
            <p>微信号：{{item.wechat}}</p>
            <p>手机号：{{item.phone}}</p>
            <p>地址：{{item.address}}</p>
          </div>
          <div class="df fdc ac jc">
            <div class="pass">
              <Toast
                btnText="申请通过"
                type="submit"
                message="确定申请通过？"
                tipText="申请已通过"
              ></Toast>
            </div>
            <div class="fail">
              <Toast btnText="申请失败"></Toast>

            </div>
          </div>
        </li>
      </ul>
    </div>

    <div
      v-if="selectId===1"
      class="quasi-agent"
    >
      <ul>
        <li
          v-for="(item,index) in applyList"
          :key="index"
          class="df jsb"
        >
          <div class="df fdc jsb information">
            <p class="redtext">ATREUS-总代</p>
            <p>姓名：{{item.name}}</p>
            <p>微信号：{{item.wechat}}</p>
            <p>手机号：{{item.phone}}</p>
            <p>地址：{{item.address}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: ["待审核", "准代理", "已代理", "已拒绝"],
      applyList: [
        {
          name: "吴琳琳",
          wechat: "wechatid",
          phone: "13546256956",
          address: "广州天河区"
        },
        {
          name: "吴琳琳",
          wechat: "wechatid",
          phone: "13546256956",
          address: "广州天河区"
        }
      ],
      quasiList:[
          {
          name: "吴琳琳",
          wechat: "wechatid",
          phone: "13546256956",
          address: "广州天河区"
        },
        {
          name: "吴琳琳",
          wechat: "wechatid",
          phone: "13546256956",
          address: "广州天河区"
        }
      ],
      selectId: 0,
      scrollWidth: 0,
      scrollLeft: 0
    };
  },
  mounted() {
    this.scrollWidth = `${
      this.$refs.navUl.firstElementChild.firstElementChild.clientWidth
    }px`;
    this.scrollLeft = `${
      this.$refs.navUl.firstElementChild.firstElementChild.offsetLeft
    }px`;
  },
  methods: {
    onList(index, e) {
      this.selectId = index;
      const { clientWidth, offsetLeft } = e.target;
      this.scrollWidth = `${clientWidth}px`;
      this.scrollLeft = `${offsetLeft}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-wrap {
  ul {
    background: #fff;
    li {
      height: 1rem;
    }
  }
}
.scroll-bar {
  height: 1px;
  bottom: 0;
  left: 0;
  background: $red;
  transition: 0.3s all;
}
.apply-list-wrap,.quasi-agent {
  margin-top: 0.13rem;
  ul {
    background: #fff;
    padding: 0 0.2rem;
    li {
      padding: 0.2rem;
      box-sizing: border-box;
      height: 2.6rem;
      @include border-bottom;
    }
    & li:last-child {
      border: none;
    }
  }
}
/deep/.pass .bulletBox .bulletBox-btn {
  @include w-h(1.4rem, 0.54rem);
  background: $red;
  color: #fff;
}
/deep/.fail .bulletBox .bulletBox-btn {
  @include w-h(1.4rem, 0.54rem);
  background: #d9d9d9;
  color: #fff;
  margin-top: 0.3rem;
}
.information p {
  color: #777;
  font-size: 0.26rem;
}
.information p.redtext {
  color: #c90000;
  font-size: 0.32rem;
}
</style>
