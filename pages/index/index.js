//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    motto: 'Hello World-宝儿',
    userInfo: {},
    cat: { name: '猫的图片' }
  },
  //事件处理函数
  bindLogViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  bindCatViewTap: function() {
    wx.navigateTo( {
      url: '../cat/cat'
    })
  },
  bindViewTap: function(event) {
    var pageName=event.currentTarget.dataset.pageName;
    var _url='../{page}/{page}'.replace('{page}',pageName).replace('{page}',pageName);
    console.log(_url);
    wx.navigateTo( { url: _url });
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})
