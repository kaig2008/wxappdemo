//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World-宝儿',
    userInfo: {},
    cat:{name:'猫的图片'}
  },
  //事件处理函数
  bindLogViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   bindCatViewTap: function() {
    wx.navigateTo({
      url: '../cat/cat'
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
  }
})
