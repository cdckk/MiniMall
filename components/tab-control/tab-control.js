// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive: false,
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(event) {
       const index = event.currentTarget.dataset.index;
       const title = event.currentTarget.dataset.title;
       this.setData({
         currentIndex: index
       })
       this.triggerEvent('myevent',{title, index})
    }
  }
})
