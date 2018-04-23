//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    list: [
      {
        id: 1,
        title: "衣带渐宽终不悔，为伊消得人憔悴。",
        author: "柳永《凤栖梧》",
        img_url: "../../static/images/1.jpg"
      },
      {
        id: 2,
        title: "死生契阔，与子成说。执子之手，与子偕老。",
        author: "佚名《诗经邶风击鼓》",
        img_url: "../../static/images/2.jpg"
      },
      {
        id: 3,
        title: "两情若是久长时，又岂在朝朝暮暮。",
        author: "秦观《鹊桥仙》",
        img_url: "../../static/images/3.jpg"
      },
      {
        id: 4,
        title: "相思相见知何日？此时此夜难为情。",
        author: "李白《三五七言》",
        img_url: "../../static/images/4.jpg"
      }
    ]
  }
})