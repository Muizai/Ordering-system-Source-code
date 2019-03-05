<template>
  <div class="payment-bill">
    <div class="status df">
      <div class="settle f1 df fdc ac jc">
        <p class="redtext">￥0.00</p>
        <p>待结算</p>
      </div>
      <div class="f1 df fdc ac jc">
        <p class="redtext">￥0.00</p>
        <p>提现中</p>
      </div>
    </div>
    <div class="bill-container">
      <ul>
        <li
          v-for="(item,index) in billList"
          :key="index"
          class="df jsb"
        >
          <div class="df fdc jc">
            <p class="use">{{item.use}}</p>
            <p class="">订单编号：{{item.order}}</p>
            <p class="gray">{{item.date}}</p>
          </div>
          <div class="df jc ac price">- {{item.price}}</div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billList: [
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        },
        {
          use: "线上采购使用货款",
          order: "478568531",
          date: "2018-05-21 12:00",
          price: "500.00"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.payment-bill {
  height: 100vh;
}
.status {
  height: 1.8rem;
  padding: 0.47rem 0;
  box-sizing: border-box;
  background: #fff;
}
.settle {
  border-right: 1px solid #eaeaea;
}
.gray {
  color: #999;
  font-size: $fs24;
}
.bill-container {
  background: #fff;
  margin-top: 0.13rem;
  ul {
    padding: 0 0.2rem;
    box-sizing: border-box;
    li {
      height: 1.8rem;
      padding: 0.2rem 0;
      @include border-bottom;
      box-sizing: border-box;
      p{
          margin: 0.05rem;
      }
    }
  }
}
.use{
    color: #444;
    font-size: $fs30;
    font-weight: 500;
}
.price{
    color: #000;
    font-size: $fs32;
}
</style>
