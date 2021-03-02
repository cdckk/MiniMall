// components/goods-item/goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
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
    handlePushClick() {
      const iid = this.properties.item.iid;
      // console.log('跳到详情页',iid)
      wx.navigateTo({
        url: '/pages/detail/detail?iid',
      })
    }
  }
})
