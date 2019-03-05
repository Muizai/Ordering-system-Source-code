<template>
  <div class="change-password df fdc ac">
    <div class="df fdc ac jc">
      <input
        type="text"
        placeholder="账号："
      >
    </div>

    <div class="df ac jc next" @click="onNext">下一步</div>
  </div>
</template>

<script>
export default {
  methods:{
    onNext(){
      this.$router.push({path:'/changepassword2'})
    }
  }
};
</script>

<style lang='scss' scoped>
.change-password {
  height: 100vh;
  background: #fff;
  & div:first-child {
    margin-top: 0.88rem;
  }
}
input {
  @include w-h(6.3rem,0.8rem);
  border: 1px solid #dbdbdb;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
}
.next {
  @include w-h(6.3rem,0.8rem);
  border-radius: 0.04rem;
  background: $red;
  color: #fff;
  margin-top: 2.17rem;
}
</style>
