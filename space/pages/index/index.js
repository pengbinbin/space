//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    h1: "外婆家的味道",
    p: "不上火的快餐",
    homeImg: "../../public/images/ad/ad.jpg",
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function(e){
    // var context = wx.createCanvasContext('basesvg');
    // const grd = context.createLinearGradient(0, 200, 200, 0);
    // grd.addColorStop(0, 'rgba(255, 134, 71, 0.5)');
    // grd.addColorStop(0.2, 'rgba(255, 134, 71, 0.5)');
    // grd.addColorStop(0.4, 'rgba(255, 255, 255, 0.1)');
    // grd.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

    // context.setFillStyle(grd);
    // context.fillRect(0, 0, 200, 400);
    // context.draw();
    // console.log(document);
    
  }
})
