<template>
  <div>
    <ul class="order-list">
      <li
        v-for="(item , index) in orderList"
        :key="index"
      >
        <div class="df jsb ac  order-num-status">
          <span style="margin-left:0.3rem">订单号：{{item.orderNum}}</span>
          <span style="margin-right:0.22rem;color:#C90000">{{item.orderStatus}}</span>
        </div>
        <div
          v-for="(goods,i) in item.orderGoods"
          :key="i"
          class="order-goods-list df fsb"
        >
          <div class="img-wrap df ac jc">
            <img
              :src="goods.goodsImg"
              alt=""
            >
          </div>
          <div class="df f1 fdc">
            <div class="df">
              <div class="introduction ellipsis2 f1">{{goods.goodsIntroduction}}</div>
              <div class="count df fdc afe">
                <div>￥{{goods.goodsPrice}}</div>
                <div class="num">X{{goods.goodsCount}}</div>
              </div>
            </div>
            <div style="width:0"></div>
            <!-- 上面这个div是为了文字二行显示省略号在flex布局下有效而写，不可去掉 -->
          </div>
        </div>

        <div
          class="df jfe"
          style="margin-right:0.18rem;line-height:0.72rem;font-size:0.26rem;color:#444;"
        >
          <span style="margin-right:0.18rem">共1件商品</span>
          <span>合计：￥180.00 (含运费￥0.00)</span>
        </div>
        <div class="df jfe operating jc ac">
          <div
            v-if="item.operatingLogistics"
          >{{item.operatingLogistics}}</div>
          
          <Toast v-if="item.operatingConfirm" :tipText="item.tipText" :message="item.message" :btnText="item.operatingConfirm" 
          :type="item.type"
          ></Toast>
          <div
            v-if="item.operatingUpload"
          >{{item.operatingUpload}}</div>
          <div
            v-if="item.operatingDelete"
          >{{item.operatingDelete}}</div>
          <div
            v-if="item.operatingBuyAgain"
          >{{item.operatingBuyAgain}}</div>

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          orderNum: "7823568425896",
          orderStatus: "卖家已发货",
          operatingLogistics: "查看物流",
          operatingConfirm: "确认收货",
          tipText:"确认收货成功",
          type:"toast",

          orderGoods: [
            {
              goodsImg: "http://thyrsi.com/t6/640/1545632666x2890174094.jpg",
              goodsIntroduction:
                "面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜",
              goodsPrice: "180",
              goodsCount: 1
            },
            {
              goodsImg: "http://thyrsi.com/t6/640/1545632666x2890174094.jpg",
              goodsIntroduction:
                "面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜",
              goodsPrice: "155",
              goodsCount: 2
            }
          ]
        },
        {
          orderNum: "782288564521896",
          orderStatus: "等待买家上传",
          operatingUpload: "上传凭证",
          operatingConfirm: "提交上传",
          message:"确认收到货物？",
          tipText:"确认收货成功",
          type:"submit",

          orderGoods: [
            {
              goodsImg: "http://thyrsi.com/t6/640/1545632666x2890174094.jpg",
              goodsIntroduction:
                "面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜",
              goodsPrice: "180",
              goodsCount: 1
            },
            {
              goodsImg: "http://thyrsi.com/t6/640/1545632666x2890174094.jpg",
              goodsIntroduction:
                "面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜",
              goodsPrice: "155",
              goodsCount: 2
            }
          ]
        },
        {
          orderNum: "78458961256396",
          operatingConfirm: "提交上传",
          message:"确认收到货物？",
          tipText:"确认收货成功",
          type:"submit",
          operatingBuyAgain: "再次购买",

          orderGoods: [
            {
              goodsImg: "http://thyrsi.com/t6/640/1545632666x2890174094.jpg",
              goodsIntroduction:
                "面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜",
              goodsPrice: "180",
              goodsCount: 1
            },
            {
              goodsImg: "http://thyrsi.com/t6/640/1545632666x2890174094.jpg",
              goodsIntroduction:
                "面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜面膜",
              goodsPrice: "155",
              goodsCount: 2
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.order-list li {
  background: #fff;
  margin-bottom: 0.13rem;
  font-size: $fs28;
}
.order-num-status {
  height: 0.8rem;
  background: #fff;
}
.order-goods-list {
  padding: 0.42rem 0.2rem 0.26rem 0.31rem;
  box-sizing: border-box;
  background: #fefcfc;
  margin-bottom: 0.13rem;
}

.img-wrap {
  @include w-h(1.82rem,1.82rem);
  img {
    max-height: 1.82rem;
    max-width: 1.82rem;
  }
}
.introduction {
  word-break: break-all;
  line-height: 0.4rem;
  margin-left: 0.3rem;
  margin-right: 0.4rem;
}
.count {
  margin-right: 0.2rem;
  color: #444;
  font-size: $fs34;
  .num {
    color: #777;
    font-size: $fs28;
  }
}

.operating div:last-child {
  border-color: $red;
  color: $red;
}
.operating {
  height: 1.02rem;
  margin-top: 0.1rem;
  border-top: 1px solid #eaeaea;
}
.operating div {
  @include w-h(1.98rem,0.62rem);
  border: 1px solid #999;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.04rem;
  margin-right: 0.25rem;
}
</style>
