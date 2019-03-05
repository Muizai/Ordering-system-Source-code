<template>
    <div class="container-wrap df fdc">
        <div class="scroll-area f1">
            <router-view />
        </div>
        <div class="tab-area">
            <footer>
                <ul class="nav">
                    <li v-for="(item,index) in tabAreaList" @click="changeTab(item.pathto,index)">
                        <i :class="[{red:isSelected==index},item.class]"></i><br>
                        <span>{{item.text}}</span>
                    </li>
                </ul>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$route.path);
    switch(this.$route.path){
      case '/agent':
        this.isSelected=0;
        break;
      case '/agent/news/systeminformation':
        this.isSelected=1;
        break;
      default:
        this.isSelected=2;
    }
  },
  data() {
    return {
      tabAreaList: [
        {
          pathto: '/agent',
          class: 'icon iconfont icon-huiyuan',
          text: '代理'
        },
        {
          pathto: '/agent/news',
          class: 'icon iconfont icon-xiaoxi',
          text: '消息'
        },
        {
          pathto: '/agent/mine',
          class: 'icon iconfont icon-weibiaoti-_huabanfuben',
          text: '我的'
        }
      ],
      isSelected:0

    }
  },
  methods: {
    changeTab(path,index) {
      this.$router.push(path);
      this.isSelected=index;
      if(index===1){
      this.$router.replace('/agent/news/systeminformation');

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.red{
    color: $red;
}
.container-wrap {
  height: 100%;
}
.scroll-area {
  overflow-y: auto;
}
.tab-area {
  height: 0.98rem;
}
footer {
  background: #fff;
  height: 100%;
}
.nav {
  padding: 0.1rem 0.5%;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  height: 100%;
}
.nav li {
  font-size: $fs24;
  float: left;
  text-align: center;
  @include w-h(33%,0.98rem);
  box-sizing: border-box;
  color: #999;
}
.nav li div {
  font-size: $fs24;
}
.txt {
  display: block;
  height: 0.36rem;
  font-size: $fs24;
}
.tab-area .icon{
    font-size: 0.45rem;
}
footer{
  border-top: 1px solid #DEDEDE;
}
</style>
