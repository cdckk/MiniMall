// pages/detail/childComps/detail-bottom-bar/detail-bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCartClick() {
      wx.showToast({
        title: '加入购物车成功',
      })
      this.triggerEvent('addToCart')
    }
  }
})
