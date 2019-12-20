//app.js
App({
  onLaunch: function() {
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
    userInfo: null,
    navbarHeight: 44, // 导航栏高度
    toolsBarHeight: 20, // 工具栏（电量、时间等）高度
    topbarHeight: 64, // 导航栏+工具栏高度
    ostype: '' // 手机系统
  },
  // 设置导航栏、工具栏高度及其和
  setTopbarHeight() {
    let { platform, statusBarHeight } = wx.getSystemInfoSync()
    if (platform === 'ios') {
      this.globalData.ostype = 'ios'
      this.globalData.navbarHeight = 44
    } else {
      this.globalData.ostype = 'android'
      this.globalData.navbarHeight = 48
    }
    this.globalData.toolsBarHeight = statusBarHeight
    this.globalData.topbarHeight =
      this.globalData.toolsBarHeight + this.globalData.navbarHeight
    console.log('工具栏高度', this.globalData.toolsBarHeight)
    console.log('导航栏高度', this.globalData.navbarHeight)
  }
})
