// pages/category/childComps/tab-menu/tab-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categoryList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event) {
      const currentIndex = event.currentTarget.dataset.index;
      this.setData({
        isActive: true,
        currentIndex: currentIndex
      });

      //每点击一次tab-menu向父组件发射事件
      this.triggerEvent('tabMenuClick', {currentIndex})
    },
    }
})
