<template>
  <div class="df fw">
    <div
      v-for="(item,index) in navList"
      @click="onItem(item.path)"
      class="df ac jc nav-list"
    >{{item.text}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    onItem(path) {
      this.$router.push({ path: path });
    }
  },
  data() {
    return {
      navList: [
        // agent
        { text: "代理", path: "/agent" },
        { text: "消息", path: "/agent/news" },
        { text: "我的", path: "/agent/mine" },
        { text: "购买云库存", path: "/buycloud" },
        { text: "我的订单", path: "/myorder/nothing" },
        { text: "我的订单", path: "/myorder/myorderlist" },
        { text: "订单详情", path: "/orderdetail" },
        { text: "上传凭证", path: "/uploadcertificate" },
        { text: "查看物流", path: "/viewlogistics" },
        { text: "添加收货地址", path: "/address" },
        { text: "确认订单", path: "/confirmorder" },
        { text: "选择收货地址", path: "/chooseaddress" },
        { text: "管理收货地址", path: "/manageaddress" },
        { text: "编辑收货地址", path: "/edit" },
        { text: "支付成功", path: "/paysuccess" },
        { text: "结算", path: "/settlement" },
        { text: "我要进货", path: "/rwpurchase" },
        { text: "", path: "" },
        { text: "", path: "" },
        { text: "", path: "" },
        { text: "", path: "" },
        // agent

        // mine
        { text: "收款账号", path: "/account" },
        { text: "收款账号", path: "/accountnum" },
        { text: "添加账号", path: "/addaccount" },
        { text: "添加收款账号", path: "/addaccount_wechat" },
        { text: "添加收款账号", path: "/addaccount_zfb" },
        { text: "添加收款账号", path: "/addaccount_cart" },
        { text: "提现", path: "/applywithdraw" },
        { text: "授权证书", path: "/authorization" },
        { text: "可提现账户", path: "/canwithdraw" },
        { text: "修改密码", path: "/changepassword1" },
        { text: "修改密码", path: "/changepassword2" },
        { text: "修改密码", path: "/changepassword3" },
        { text: "常用发货快递", path: "/commonlogistics" },
        { text: "支出奖励账户", path: "/expenditurerewardaccount" },
        { text: "提取奖励账户", path: "/extractRewardAccount" },
        { text: "关注商家公众号", path: "/follow" },
        { text: "保证金", path: "/guaranty_n" },
        { text: "保证金", path: "/guaranty" },
        { text: "保证金", path: "/guaranty_1" },
        { text: "收入账单", path: "/incomebill" },
        { text: "邀请关系网", path: "/invitationnetwork" },
        { text: "进货关系网", path: "/purchasenetwork" },
        { text: "邀请一次性奖励", path: "/inviteonetimereward" },
        { text: "邀请订单奖励", path: "/inviteorderreward" },
        { text: "登录", path: "/login" },
        { text: "管理支付宝账号", path: "/mangealipay" },
        { text: "月度业绩奖励", path: "/monthlyperformancereward" },
        { text: "设置", path: "/setting" },
        { text: "设置", path: "/settingpersonnalinformation" },
        { text: "修改手机号码", path: "/settingphonenum1" },
        { text: "修改手机号码", path: "/settingphonenum2" },
        { text: "重置密码", path: "/resetpw1" },
        { text: "重置密码", path: "/resetpw2" },
        { text: "重置密码", path: "/resetpw3" },
        { text: "在线留言", path: "/onlinemessage" },
        { text: "详情", path: "/announcement_detail" },
        { text: "详情", path: "/activity_detail" },
        { text: "待结算", path: "/settlestatus" },
        { text: "提现中", path: "/withdrawing" },
        { text: "充值中", path: "/rechargeing" },
        { text: "支出账单", path: "/paybill" },
        { text: "货款账户", path: "/paymentaccount" },
        { text: "货款账单", path: "/paymentbill" },
        { text: "线下货款充值", path: "/offlinerecharge" },
        { text: "充值", path: "/recharge" },
        { text: "我的业绩", path: "/myperformance" },
        { text: "团队业绩", path: "/teamperformance" },
        { text: "团队业绩", path: "/teamperformance2" },
        { text: "奖励", path: "/reward" },
        { text: "升级订单奖励", path: "/upgradeorderreward" },
        { text: "顶级平推奖励", path: "/topreward" },
        { text: "非顶级平推奖励", path: "/untopreward" },
        { text: "月度业绩奖励", path: "/monthlyperformancereward" },
        { text: "新代理加盟", path: "/newagentjoin" },
        { text: "微信代理授权", path: "/wechatagentauthorize" },
        { text: "申请代理", path: "/applyagent" },
        { text: "申请代理", path: "/applyagent" },
        { text: "申请代理", path: "/applyagent_1" },
        { text: "申请代理", path: "/applyagent_2" },
        { text: "申请代理", path: "/applyagent_3" },
        { text: "申请代理", path: "/applyagent_4" },
        { text: "代理申请管理", path: "/agentapplymanage" },
        { text: "", path: "" },
        { text: "", path: "" },
        { text: "", path: "" },
        { text: "", path: "" },
        { text: "", path: "" },
        // mine

        // news
        { text: "消息-活动预告", path: "/agent/news/activity" },
        { text: "消息-公告资讯", path: "/agent/news/announcement" },
        { text: "消息-系统消息", path: "/agent/news/systeminformation" },
        { text: "详情", path: "/activity_detail" },
        { text: "详情", path: "/announcement_detail" }
        // news
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.nav-list {
  width: 33.3333vw;
  height: 33.3333vw;
  @include border-bottom;
}
</style>
