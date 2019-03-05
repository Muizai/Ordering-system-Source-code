<template>
  <div class="common-logistics">
    <ul>
      <li class="df jsb ac">
        <span>申通快递</span>
        <el-switch
          v-model="value1"
          active-color="#c90000"
          inactive-color="#E8E8E8"
        >
        </el-switch>
      </li>
      <li class="df jsb ac">
        <span>圆通快递</span>
        <el-switch
          v-model="value2"
          active-color="#c90000"
          inactive-color="#E8E8E8"
        >
        </el-switch>
      </li>
      <li class="df jsb ac">
        <span>中通快递</span>
        <el-switch
          v-model="value3"
          active-color="#c90000"
          inactive-color="#E8E8E8"
        >
        </el-switch>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
    data() {
    return {
      value1: true,
      value2: false,
      value3: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.common-logistics {
  background: #fff;
  height: 100vh;
}
ul {
  padding: 0 0.2rem;
  li {
    height: 0.94rem;
    @include border-bottom;
  }
}
</style>
