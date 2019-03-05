<template>
  <div class="personal-performance">
    <div class="total df jsb ac">
      <span>累积业绩</span>
      <span class="redtext">￥3000.00</span>
    </div>
    <div class="container">
        <ul>
            <li v-for="(item,index) in performanceList" :key="index" class="df ac jsb">
                <div>
                <svg class="icon " aria-hidden="true">
                    <use xlink:href="#icon-chongzhi5"></use>
                </svg>
                <span>{{item.date}}月业绩余额</span>
                </div>
                <div class="price">￥{{item.price}}</div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            performanceList:[
                {date:'6',price:'500.00'},
                {date:'5',price:'500.00'},
                {date:'4',price:'500.00'},
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.personal-performance {
  height: 100vh;
  background: #fff;
  .total {
    height: 1rem;
    background: #f5f5f5;
    padding: 0 0.2rem;
    font-size: $fs28;
    .redtext {
      font-size: $fs36;
    }
  }
}
.container{
    ul{
        padding: 0 0.2rem;
        li{
            height: 1rem;
            @include border-bottom;
            .icon{
                @include w-h(0.3rem,0.3rem);
                color: #B37B33;
                margin-right: 0.1rem;
            }
            .price{
                font-weight: bold;
            }
        }

    }
}
</style>
