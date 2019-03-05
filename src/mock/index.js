import Mock from 'mockjs'

const tabList = ["畅销爆品系列", "VC系列", "护肤系列", "防晒系列", "山竹系列", "彩妆系列", "养护系列", "24k系列", "紫苏系列", "礼盒系列", "洗护用品系列", "单品系列"];
// 生成随机的id
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
tabList.forEach((item, index) => {
    Mock.mock(`/api/getCategoryGoods?categoryId=${index}`, {
        status: 0,
        statusCode: 200,
        data: (new Array(20)).fill().map(subItem => ({
            goodsId: guid(),
            productIntroduction: item.repeat(50),
            unitPrice: 233 + index,
            goodsInventory: 888,
            singleCount: 0,
            imgSrc: 'http://new.atreusthai.com/upload/201811/1543306769.jpg'
        })),
        message: ""
    })
})


