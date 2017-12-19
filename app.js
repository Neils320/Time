//app 的生命周期
App({

  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    //每次登录获取用户的信息
    wx.getUserInfo({
      success: function (res) {
        wx.showToast({
          title: '欢迎 ' + res.userInfo.nickName + ' 大大',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function () {
    // console.log('onShow');
  },
  //当小程序从前台进入后台，会触发 onHide
  onHide: function () {

  },
  //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function () {
    // console.log('onError');
  },
})