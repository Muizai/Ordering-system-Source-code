<template>
  <div class="guaranty-n df fdc ac">
    <img src="./../../../static/img/bond-no.png" alt="">
    <p>您还没有缴纳保证金</p>
    <div class="redBtn df ac jc">去缴纳</div>
  </div>
</template>

<script>
export default {
    mounted(){
        
    }
};
</script>

<style lang="scss" scoped>
.guaranty-n{
  img{
    @include w-h(2.88rem,2.2rem);
    margin-top: 1.88rem;
  }
  p{
    margin-top: 0.7rem;
  }
}
</style>
