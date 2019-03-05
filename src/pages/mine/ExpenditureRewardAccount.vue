<template>
  <div class="extract-reward-account">
    <div class="extracting df ac jc fdc">
      <p>支出中</p>
      <p class="count">3000.00</p>
    </div>
    <div class="container pr">
      <ul class="df" ref="ulList">
        <li
          class="f1 df ac jc"
          v-for="(item,index) in extractList"
          :key="index"
          
        >
          <span :class="{redtext:selectId===index}" @click="onItem(index,$event)">{{item}}</span>
        </li>
      </ul>
      <div class="scroll-bar pa" :style="{width:scrollWidth,left:scrollLeft}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extractList: ["全部", "提款审核", "确认中", "已支出", "已失效"],
      selectId: 0,
      scrollWidth:0,
      scrollLeft:0
    };
  },
  mounted(){
      
      this.scrollWidth=`${this.$refs.ulList.firstElementChild.firstElementChild.clientWidth}px`;
          this.scrollLeft=`${this.$refs.ulList.firstElementChild.firstElementChild.offsetLeft}px`;
  },
  methods:{
      onItem(index,e){
          this.selectId=index;
          const{clientWidth,offsetLeft}=e.target;
          this.scrollWidth=`${clientWidth}px`;
          this.scrollLeft=`${offsetLeft}px`;
      }
  }
};
</script>

<style lang="scss" scoped>
.extract-reward-account {
  height: 100vh;
  background: #fff;
}
.extracting {
  height: 3.46rem;
  background: url("./../../../static/img/withdraw.jpg") no-repeat center center;
  background-size: cover;
  color: #fff;
  .count {
    font-size: 0.5rem;
    margin-top: 0.1rem;
  }
}
.container {
  height: 1rem;
  ul {
    height: 100%;
    @include border-bottom;
    li {
      height: 100%;
    }
  }
}
.scroll-bar{
    height: 3px;
    background: $red;
    transition: 0.3s all;
    bottom: 0;
}
</style>
