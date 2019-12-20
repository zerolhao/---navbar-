// components/search-navbar/search-navbar.js
const app = getApp()
Component({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    back: Boolean,
    title: String,
    search: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    toolsBarHeight: app.globalData.toolsBarHeight,
    navbarHeight: app.globalData.navbarHeight,
    topbarHeight: app.globalData.topbarHeight,
    contentWidth: wx.getMenuButtonBoundingClientRect().left
  },
  observers: {},

  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  created() {},
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})
