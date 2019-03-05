<template>
  <div>
    <div class="container" ref="container">
      <div class="listWrap" ref="listWrap" :style="{ transform: `translateX(${listWrapTranslateX})` }">
        <div class="listItem" v-for=" ( item, index ) in titleList" :key="index" @click="onItemClick">
          {{ item }}
        </div>
        <div class="scrollBar" :style="{ left: scrollBarLeft, width: scrollBarWidth }" ></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      titleList: [ '推荐分类', '京东超市', '国际名牌', '奢侈品', '海屯全球', '唯品会', '男装', '女装', '男鞋','女鞋', '内衣配饰', '箱包手袋', '美妆护肤', '个护清洁', '钟表珠宝', '手机数码', 'croatia','huangxiaoling'],
      scrollBarWidth: 0,
      scrollBarLeft: 0,
      listWrapTranslateX: 0
    }
  },
  created(){
  },
  mounted(){
      let firstItem=this.$refs.listWrap.firstElementChild;
      this.scrollBarWidth=`${firstItem.offsetWidth}px`;
      this.scrollBarLeft=`${firstItem.offsetLeft}px`
  },
  methods: {
    onItemClick( e ){
      console.log(e)
      const { offsetWidth, offsetLeft, clientWidth } = e.target;
    //   this.scrollBarWidth = `${offsetWidth}px`;
    this.scrollBarWidth=offsetWidth+'px';
      this.scrollBarLeft = `${offsetLeft}px`;
      this.startMove(offsetLeft - window.innerWidth / 2 + clientWidth / 2)
    },
    startMove(distance){
      // this.$refs.listWrap.scrollLeft = `${distance}px`
      console.log(this.$refs.listWrap);
      let _distance = this.$refs.container.scrollLeft;
      console.log(_distance);
      let count = 0;
      if( _distance > distance ){
        // 滚动条往左
        count = -10;
        console.log("滚动条往左")
      }else {
        // 滚动条往右
        count = 10;
        console.log("滚动条往右")
      }
      clearInterval( this.timer )
      this.timer = setInterval(() => {
        this.$refs.container.scrollTo( _distance, 0 )
        _distance = _distance + count;
        if( (_distance >= distance && count > 0) || (_distance <= distance && count < 0) ){
          clearInterval( this.timer )
        }
      }, 20);
    }
  }
}
</script>


<style>
  .container {
    overflow-x: scroll;
    font-size:0.24rem
  }
  .container::-webkit-scrollbar {
      display: none;
  }
  .listWrap {
      
    position: relative;
    /* display: inline-block; */
    white-space: nowrap;
    /* transition: .3s all; */
  }

  .listItem {
    display: inline-block;
    padding: .1rem;
    word-break: keep-all;
  }
  .scrollBar {
    width: 1rem;
    position: absolute;
    bottom: 0;
    height: .02rem;
    background-color: skyblue;
    transition: 0.3s all;
  }
</style>