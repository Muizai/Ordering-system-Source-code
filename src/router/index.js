import Vue from 'vue'
import Router from 'vue-router'
import Agent from '@/pages/agent/Agent'
import Mine from '@/pages/mine/Mine'
import Purchase from '@/pages/agent/purchase/Purchase'
import Home from '@/pages/home/Home'
import Setting from '@/pages/mine/Setting'
import myCroatia from '@/pages/agent/purchase/MyCroatia'
import Rwpurchase from '@/pages/agent/purchase/Rwpurchase'
import Address from '@/pages/agent/purchase/Address'
import ConfirmOrder from '@/pages/agent/purchase/ConfirmOrder'
import ChooseAddress from '@/pages/agent/purchase/ChooseAddress'
import ManageAddress from '@/pages/agent/purchase/ManageAddress'
import Settlement from '@/pages/agent/purchase/Settlement'
import Demo from '@/pages/agent/purchase/Demo'
import Edit from '@/pages/agent/purchase/Edit'
import PaySuccess from '@/pages/agent/purchase/PaySuccess'
import MyOrder from '@/pages/agent/order/MyOrder'
import Nothing from '@/pages/agent/order/Nothing'
import MyOrderList from '@/pages/agent/order/MyOrderList'
import OrderDetail from '@/pages/agent/order/OrderDetail'
import UploadCertificate from '@/pages/agent/order/UploadCertificate'
import ViewLogistics from '@/pages/agent/order/ViewLogistics'
import Vuex from '@/pages/agent/Vuex'
import Toast from '@/components/Toast.vue'
import BuyCloud from '@/pages/agent/buyCloudInventory/BuyCloud'
import SettingPersonnalInformation from '@/pages/mine/SettingPersonnalInformation'
import SettingPhoneNum1 from '@/pages/mine/SettingPhoneNum1'
import SettingPhoneNum2 from '@/pages/mine/SettingPhoneNum2'
import ChangePassword1 from '@/pages/mine/ChangePassword1'
import ChangePassword2 from '@/pages/mine/ChangePassword2'
import ChangePassword3 from '@/pages/mine/ChangePassword3'
import CommonLogistics from '@/pages/mine/CommonLogistics'
import Follow from '@/pages/mine/Follow'
import Login from '@/pages/mine/Login'
import ResetPw1 from '@/pages/mine/ResetPw1'
import ResetPw2 from '@/pages/mine/ResetPw2'
import ResetPw3 from '@/pages/mine/ResetPw3'
import OnlineMessage from '@/pages/mine/OnlineMessage'
import Guaranty_n from '@/pages/mine/Guaranty_n'
import Guaranty from '@/pages/mine/Guaranty'
import Guaranty_1 from '@/pages/mine/Guaranty_1'
import AccountNum from '@/pages/mine/AccountNum'
import AddAccountWechat from '@/pages/mine/AddAccountWechat'
import AddAccountZfb from '@/pages/mine/AddAccountZfb'
import AddAccountCart from '@/pages/mine/AddAccountCart'
import CanWithdraw from '@/pages/mine/CanWithdraw'
import Account from '@/pages/mine/Account'
import SettleStatus from '@/pages/mine/SettleStatus'
import WithDrawing from '@/pages/mine/WithDrawing'
import Rechargeing from '@/pages/mine/Rechargeing'
import IncomeBill from '@/pages/mine/IncomeBill'
import PayBill from '@/pages/mine/PayBill'
import ApplyWithdraw from '@/pages/mine/ApplyWithdraw'
import AddAccount from '@/pages/mine/AddAccount'
import MangeAlipay from '@/pages/mine/MangeAlipay'
import PaymentAccount from '@/pages/mine/PaymentAccount'
import PaymentBill from '@/pages/mine/PaymentBill'
import OfflineRecharge from '@/pages/mine/OfflineRecharge'
import Recharge from '@/pages/mine/Recharge'
import Authorization from '@/pages/mine/Authorization'
import MyPerformance from '@/pages/mine/MyPerformance'
import PersonalPerformance from '@/pages/mine/PersonalPerformance'
import TeamPerformance from '@/pages/mine/TeamPerformance'
import TeamPerformance2 from '@/pages/mine/TeamPerformance2'
import InvitationNetwork from '@/pages/mine/InvitationNetwork'
import PurchaseNetwork from '@/pages/mine/PurchaseNetwork'
import Reward from '@/pages/mine/Reward'
import News from '@/pages/news/News'
import SystemInformation from '@/pages/news/SystemInformation'
import Announcement from '@/pages/news/Announcement'
import AnnouncementDetail from '@/pages/news/AnnouncementDetail'
import Activity from '@/pages/news/Activity'
import ActivityDetail from '@/pages/news/ActivityDetail'
import Nav from '@/pages/Nav'
import extractRewardAccount from '@/pages/mine/extractRewardAccount'
import ExpenditureRewardAccount from '@/pages/mine/ExpenditureRewardAccount'
import InviteOnetimeReward from '@/pages/mine/InviteOnetimeReward'
import InviteOrderReward from '@/pages/mine/InviteOrderReward'
import UpgradeOrderReward from '@/pages/mine/UpgradeOrderReward'
import TopReward from '@/pages/mine/TopReward'
import UnTopReward from '@/pages/mine/UnTopReward'
import MonthlyPerformanceReward from '@/pages/mine/MonthlyPerformanceReward'
import NewAgentJoin from '@/pages/mine/NewAgentJoin'
import WechatAgentAuthorize from '@/pages/mine/WechatAgentAuthorize'
import ApplyAgent from '@/pages/mine/ApplyAgent'
import ApplyAgent_1 from '@/pages/mine/ApplyAgent_1'
import ApplyAgent_2 from '@/pages/mine/ApplyAgent_2'
import ApplyAgent_3 from '@/pages/mine/ApplyAgent_3'
import hahha from '@/pages/mine/hahha'
import ApplyAgent_4 from '@/pages/mine/ApplyAgent_4'
import AgentApplyManage from '@/pages/mine/AgentApplyManage'
import MyWarehouse from '@/pages/agent/inventory/MyWarehouse'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/nav',
      name:Nav,
      component:Nav,
      meta:{
        title:'页面导航'
      }
    },
    {
      path: '/agent',
      name: 'Home',
      component: Home,
      children: [
        { path: '/agent', component: Agent, meta: { title: '代理' } },
        { path: 'mine', component: Mine, meta: { title: '我的' } },
        { path: 'news', component: News, meta: { title: '消息' } ,children:[
          {path:'systeminformation',component:SystemInformation},
          {path:'announcement',component:Announcement},
          {path:'activity',component:Activity},
        ]}
      ]
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Rwpurchase,
      meta: {
        title: '我要进货'
      }
    },
    {
      path: '/setting',
      component: Setting,
      meta: {
        title: '设置'
      }
    },
    {
      path: '/news',
      component: myCroatia
    },
    {
      path: '/rwpurchase',
      component: Rwpurchase,
      meta: {
        title: '进货'
      }
    },
    {
      path: '/address',
      component: Address,
      meta: {
        title: '添加收货地址'
      }
    },
    {
      path: '/confirmorder',
      component: ConfirmOrder,
      meta: {
        title: '确认订单'
      }
    },
    {
      path: '/chooseaddress',
      component: ChooseAddress,
      meta: {
        title: '选择收货地址'
      }
    },
    {
      path: '/manageaddress',
      component: ManageAddress,
      meta: {
        title: '管理收货地址'
      }
    },
    {
      path: '/edit',
      component: Edit,
      meta: {
        title: '编辑收货地址'
      }
    },
    {
      path: '/paysuccess',
      component: PaySuccess,
      meta: {
        title: '支付成功'
      }
    },
    {
      path: '/myorder',
      component: MyOrder,
      meta: { title: '我的订单' },
      children: [
        {
          path: 'nothing', component: Nothing,
          meta: { title: '我的订单' }
        },
        {
          path: 'myorderlist', component: MyOrderList,
          meta: { title: '我的订单' }
        }

      ]
    },
    {
      path: '/orderdetail',
      component: OrderDetail,
      meta: {
        title: '订单详情'
      }
    },
    {
      path: '/vuex',
      component: Vuex
    },
    {
      path: '/settlement',
      component: Settlement,
      meta: {
        title: '结算'
      }
    },
    {
      path: '/uploadcertificate',
      component: UploadCertificate,
      meta: {
        title: '上传凭证'
      }
    },
    {
      path: '/toast',
      component: Toast
    },
    {
      path: '/viewlogistics',
      component: ViewLogistics,
      meta: {
        title: '查看物流'
      }
    },
    {
      path: '/buycloud',
      component: BuyCloud,
      meta: {
        title: '购买云库存'
      }
    },
    {
      path: '/settingpersonnalinformation',
      component: SettingPersonnalInformation,
      meta: {
        title: '设置'
      }
    },
    {
      path: '/settingphonenum1',
      component: SettingPhoneNum1,
      meta: {
        title: '修改手机号码'
      }
    },
    {
      path: '/settingphonenum2',
      component: SettingPhoneNum2,
      meta: {
        title: '修改手机号码'
      }
    },
    {
      path: '/changepassword1',
      component: ChangePassword1,
      meta: {
        title: '修改密码'
      }
    },
    {
      path: '/changepassword2',
      component: ChangePassword2,
      meta: {
        title: '修改密码'
      }
    },
    {
      path: '/changepassword3',
      component: ChangePassword3,
      meta: {
        title: '修改密码'
      }
    },
    {
      path: '/commonlogistics',
      component: CommonLogistics,
      meta: {
        title: '常用发货快递'
      }
    },
    {
      path: '/follow',
      component: Follow,
      meta: {
        title: '关注商家公众号'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/resetpw1',
      component: ResetPw1,
      meta: {
        title: '重置密码'
      }
    },
    {
      path: '/resetpw2',
      component: ResetPw2,
      meta: {
        title: '重置密码'
      }
    },
    {
      path: '/resetpw3',
      component: ResetPw3,
      meta: {
        title: '重置密码'
      }
    },
    {
      path: '/onlinemessage',
      component: OnlineMessage,
      meta: {
        title: '在线留言'
      }
    },
    {
      path: '/guaranty_n',
      component: Guaranty_n,
      meta: {
        title: '保证金'
      }
    },
    {
      path: '/guaranty',
      component: Guaranty,
      meta: {
        title: '保证金'
      }
    },
    {
      path: '/guaranty_1',
      component: Guaranty_1,
      meta: {
        title: '保证金'
      }
    },
    {
      path: '/accountnum',
      component: AccountNum,
      meta: {
        title: '收款账号'
      }
    },
    {
      path: '/addaccount_wechat',
      component: AddAccountWechat,
      meta: {
        title: '添加收款账号'
      }
    },
    {
      path: '/addaccount_zfb',
      component: AddAccountZfb,
      meta: {
        title: '添加收款账号'
      }
    },
    {
      path: '/addaccount_cart',
      component: AddAccountCart,
      meta: {
        title: '添加收款账号'
      }
    },
    {
      path: '/announcement_detail',
      component: AnnouncementDetail,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/activity_detail',
      component: ActivityDetail,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/account',
      component: Account,
      meta: {
        title: '收款账号'
      }
    },
    {
      path: '/canwithdraw',
      component: CanWithdraw,
      meta: {
        title: '可提现账户'
      }
    },
    {
      path: '/settlestatus',
      component: SettleStatus,
      meta: {
        title: '待结算'
      }
    },
    {
      path: '/withdrawing',
      component: WithDrawing,
      meta: {
        title: '提现中'
      }
    },
    {
      path: '/rechargeing',
      component: Rechargeing,
      meta: {
        title: '充值中'
      }
    },
    {
      path: '/incomebill',
      component: IncomeBill,
      meta: {
        title: '收入账单'
      }
    },
    {
      path: '/paybill',
      component: PayBill,
      meta: {
        title: '支出账单'
      }
    },
    {
      path: '/applywithdraw',
      component: ApplyWithdraw,
      meta: {
        title: '提现'
      }
    },
    {
      path: '/addaccount',
      component: AddAccount,
      meta: {
        title: '添加账号'
      }
    },
    {
      path: '/mangealipay',
      component: MangeAlipay,
      meta: {
        title: '管理支付宝账号'
      }
    },
    {
      path: '/paymentaccount',
      component: PaymentAccount,
      meta: {
        title: '货款账户'
      }
    },
    {
      path: '/paymentbill',
      component: PaymentBill,
      meta: {
        title: '货款账单'
      }
    },
    {
      path: '/offlinerecharge',
      component: OfflineRecharge,
      meta: {
        title: '线下货款充值'
      }
    },
    {
      path: '/recharge',
      component: Recharge,
      meta: {
        title: '充值'
      }
    },
    {
      path: '/authorization',
      component: Authorization,
      meta: {
        title: '授权证书'
      }
    },
    {
      path: '/myperformance',
      component: MyPerformance,
      meta: {
        title: '我的业绩'
      }
    },
    {
      path: '/personalperformance',
      component: PersonalPerformance,
      meta: {
        title: '个人业绩'
      }
    },
    {
      path: '/teamperformance',
      component: TeamPerformance,
      meta: {
        title: '团队业绩'
      }
    },
    {
      path: '/teamperformance2',
      component: TeamPerformance2,
      meta: {
        title: '团队业绩'
      }
    },
    {
      path: '/invitationnetwork',
      component: InvitationNetwork,
      meta: {
        title: '邀请关系网'
      }
    },
    {
      path: '/purchasenetwork',
      component: PurchaseNetwork,
      meta: {
        title: '进货关系网'
      }
    },
    {
      path: '/reward',
      component: Reward,
      meta: {
        title: '奖励'
      }
    },
    {
      path: '/extractRewardAccount',
      component: extractRewardAccount,
      meta: {
        title: '提取奖励账户'
      }
    },
    {
      path: '/expenditurerewardaccount',
      component: ExpenditureRewardAccount,
      meta: {
        title: '支出奖励账户'
      }
    },
    {
      path: '/inviteonetimereward',
      component: InviteOnetimeReward,
      meta: {
        title: '邀请一次性奖励'
      }
    },
    {
      path: '/inviteorderreward',
      component: InviteOrderReward,
      meta: {
        title: '邀请订单奖励'
      }
    },
    {
      path: '/upgradeorderreward',
      component: UpgradeOrderReward,
      meta: {
        title: '升级订单奖励'
      }
    },
    {
      path: '/topreward',
      component: TopReward,
      meta: {
        title: '顶级平推奖励'
      }
    },
    {
      path: '/untopreward',
      component: UnTopReward,
      meta: {
        title: '非顶级平推奖励'
      }
    },
    {
      path: '/monthlyperformancereward',
      component: MonthlyPerformanceReward,
      meta: {
        title: '月度业绩奖励'
      }
    },
    {
      path: '/newagentjoin',
      component: NewAgentJoin,
      meta: {
        title: '新代理加盟'
      }
    },
    {
      path: '/wechatagentauthorize',
      component: WechatAgentAuthorize,
      meta: {
        title: '微信代理授权'
      }
    },
    {
      path: '/applyagent',
      component: ApplyAgent,
      meta: {
        title: '申请代理'
      }
    },
    {
      path: '/applyagent_1',
      component: ApplyAgent_1,
      meta: {
        title: '申请代理'
      }
    },
    {
      path: '/applyagent_2',
      component: ApplyAgent_2,
      meta: {
        title: '申请代理'
      }
    },
    {
      path: '/applyagent_3',
      component: ApplyAgent_3,
      meta: {
        title: '申请代理'
      }
    },
    {
      path: '/applyagent_4',
      component: ApplyAgent_4,
      meta: {
        title: '申请代理'
      }
    },
    {
      path: '/agentapplymanage',
      component: AgentApplyManage,
      meta: {
        title: '代理申请管理'
      }
    },
    {
      path: '/mywarehouse',
      component: MyWarehouse,
      meta: {
        title: '我的仓库'
      }
    },
    {
      path: '/demo',
      component: Demo
    },
    {
      path: '/hahha',
      component: hahha
    }
  ]
})
