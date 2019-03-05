<template>
  <div class="container">
    <div class="agent-header">
      <div class="agent-message">
        <div class="agent-img">
          <img src="./../../../static/img/agent-img.jpg" alt="">
        </div>
        <div class="agent-name-id">
          <span class="agent-name">ATREUS</span>
          <span class="agent-id">ID:<span>4729857</span></span>
        </div>
        <div class="general-agent">
          <span class="general-agent-icon"></span>
          <span class="text">总代</span>
        </div>
      </div>
      <div class="agent-choose">
        <ul>
          <router-link v-for="(item,index) in agentChooseList" :to="item.pathto" :key="index" tag="li">
            <span :class="item.class"></span>
            <span>{{item.text}}</span>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="agent-nav">
      <ul>
        <router-link v-for="(item,index) in agentNavList" :to="item.pathto" :key="index" tag="li">
          <span :class="item.class"></span>
          <span>{{item.text}}</span>
        </router-link>
      </ul>
    </div>
    <div class="banner">
      <img src="./../../../static/img/banner.jpg" alt="">
    </div>
    <div class="subordinate-purchase">
      <div><span>下级进货</span></div>
      <ul class="subordinate-purchase-order">
        <router-link v-for="(item,index) in subordinatePurchaseOrder" :to="item.pathto" :key="index" tag="li">
          <span :class="item.class"></span>
          <span>{{item.text}}</span>
        </router-link>

      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        agentChooseList: [
          {
            pathto: '/purchase',
            class: 'i-want-purchase',
            text: '我要进货'
          },
          {
            pathto: '/buycloud',
            class: 'buy-cloud-inventory',
            text: '买云库存'
          },
          {
            pathto: '/myOrder',
            class: 'my-order',
            text: '我的订单'
          },
          {
            pathto: '/myInventory',
            class: 'my-inventory',
            text: '我的库存'
          }
        ],
        agentNavList: [
          {
            pathto: '/newagentjoin',
            class: 'invite',
            text: '邀请代理',
          },
          {
            pathto: '/review',
            class: 'review',
            text: '审核代理'
          },
          {
            pathto: '/reward',
            class: 'reward',
            text: '奖励'
          },
          {
            pathto: '/myperformance',
            class: 'achievement',
            text: '我的业绩'
          },
          {
            pathto: '/purchasenetwork',
            class: 'purchase-networking',
            text: '进货关系网'
          },
          {
            pathto: '/invitationnetwork',
            class: 'invite-networking',
            text: '邀请关系网'
          },
          {
            pathto: '/authorization',
            class: 'letter-of-authorization',
            text: '授权证书'
          }
        ],
        subordinatePurchaseOrder: [
          {
            pathto: '/allOrder',
            class: 'all-order',
            text: '全部'
          },
          {
            pathto: '/toBeConfirmed',
            class: 'to-be-confirmed',
            text: '待确认'
          },
          {
            pathto: '/waitingForPayment',
            class: 'waiting-for-payment',
            text: '待付款'
          },
          {
            pathto: '/waitingForDelivery',
            class: 'waiting-for-delivery',
            text: '待发货'
          },
          {
            pathto: '/waitingForReceiving',
            class: 'waiting-for-receiving',
            text: '待收货'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    overflow: hidden;
  }

  .agent-header {
    height: 3.6rem;
    width: 100%;
    background: url('./../../../static/img/my-user.jpg') no-repeat;
    background-size: 100% 100%;
  }

  .agent-message {
    height: 1.8rem;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .agent-name {
    font-size: 0.36rem;
  }

  .agent-id {
    font-size: 0.26rem;
    margin-top: 0.2rem;
  }

  .agent-img {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    margin: 0.4rem 0 0 0.2rem;
    float: left;
  }

  .agent-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .agent-name-id {
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.56rem;
    display: flex;
    flex-direction: column;
  }

  .agent-choose {
    height: 1.8rem;
    width: 100%;
  }

  .general-agent {
    width: 1.56rem;
    height: 0.56rem;
    background: #d6cbbf;
    border-top-left-radius: 0.28rem;
    border-bottom-left-radius: 0.28rem;
    position: absolute;
    right: 0;
    top: 0.54rem;
    overflow: hidden;
  }

  .general-agent .text {
    font-size: 0.28rem;
    float: left;
    line-height: 0.56rem;
    margin-left: 0.19rem;
    color: #fff;
  }

  .general-agent-icon {
    float: left;
    width: 0.46rem;
    height: 0.46rem;
    background: url('./../../../static/img/general-agent.png') no-repeat;
    background-size: 100% 100%;
    margin: 0.05rem 0 0 0.06rem;
  }

  .agent-choose ul {
    width: 100%;
  }

  .agent-choose ul li {
    font-size: 0.24rem;
    float: left;
    text-align: center;
    height: 0.98rem;
    box-sizing: border-box;
    width: 25%;
    padding: 4%;
    color: #fff;
    box-sizing: border-box;
    font-size: 0.24rem;
  }

  .i-want-purchase {
    display: block;
    width: 0.65rem;
    height: 0.65rem;
    background: url('./../../../static/img/i-want-purchase.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.15rem;
  }

  .buy-cloud-inventory {
    display: block;
    width: 0.68rem;
    height: 0.65rem;
    background: url('./../../../static/img/buy-cloud-inventory.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.15rem;
  }

  .my-order {
    display: block;
    width: 0.58rem;
    height: 0.65rem;
    background: url('./../../../static/img/my-order.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.15rem;
  }

  .my-inventory {
    display: block;
    width: 0.68rem;
    height: 0.65rem;
    background: url('./../../../static/img/my-inventory.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.15rem;
  }

  .agent-nav {
    height: 2.97rem;
    width: 100%;
    background: #fff;
  }

  .agent-nav>ul {
    height: 2.97rem;
  }

  .agent-nav li {
    font-size: 0.24rem;
    float: left;
    text-align: center;
    color: #999;
    width: 25%;
    padding: 5% 2%;
    box-sizing: border-box;
    height: 1.485rem;
    font-size: 0.24rem;
  }

  .invite {
    display: block;
    width: 0.48rem;
    height: 0.48rem;
    background: url('./../../../static/img/invite.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .review {
    display: block;
    width: 0.49rem;
    height: 0.49rem;
    background: url('./../../../static/img/review.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .reward {
    display: block;
    width: 0.47rem;
    height: 0.49rem;
    background: url('./../../../static/img/reward.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .achievement {
    display: block;
    width: 0.54rem;
    height: 0.4rem;
    background: url('./../../../static/img/achievement.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .purchase-networking {
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background: url('./../../../static/img/purchase-networking.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .invite-networking {
    display: block;
    width: 0.48rem;
    height: 0.5rem;
    background: url('./../../../static/img/invite-networking.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .letter-of-authorization {
    display: block;
    width: 0.5rem;
    height: 0.49rem;
    background: url('./../../../static/img/letter-of-authorization.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .banner {
    height: 2rem;
    width: 100%;
    margin-top: 0.16rem;
  }

  .banner img {
    width: 100%;
    height: 100%;
  }

  .subordinate-purchase>div {
    height: 0.86rem;
    padding: 0.3rem 0.1rem 0 0.19rem;
    box-sizing: border-box;
    background: #fff;
  }

  .subordinate-purchase>div>span {
    font-size: 0.3rem;
    display: block;
    border-left: 0.06rem solid red;
    text-align: left;
    padding-left: 0.1rem;
  }

  .subordinate-purchase-order {
    width: 100%;
    height: 1.39rem;
    background: #fff;
    margin-top: 0.1rem;
  }

  .subordinate-purchase-order li {
    font-size: 0.24rem;
    float: left;
    text-align: center;
    height: 0.98rem;
    box-sizing: border-box;
    color: #999;
    width: 20%;
    padding: 0.24rem 0;
  }

  .all-order {
    display: block;
    width: 0.5rem;
    height: 0.49rem;
    background: url('./../../../static/img/all-order.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .to-be-confirmed {
    display: block;
    width: 0.5rem;
    height: 0.49rem;
    background: url('./../../../static/img/to-be-confirmed.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .waiting-for-payment {
    display: block;
    width: 0.5rem;
    height: 0.49rem;
    background: url('./../../../static/img/waiting-for-payment.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .waiting-for-delivery {
    display: block;
    width: 0.5rem;
    height: 0.49rem;
    background: url('./../../../static/img/waiting-for-delivery.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }

  .waiting-for-receiving {
    display: block;
    width: 0.5rem;
    height: 0.49rem;
    background: url('./../../../static/img/waiting-for-receiving.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0.1rem;
  }
</style>