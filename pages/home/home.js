// pages/home/home.js
import {getGoodsdata, getMultidata} from '../../service/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    type: 'pop',
    page: 1,
    data: {},
    currentIndex: 0,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求轮播图以及推荐数据
    getMultidata().then(res => {
      //吸取轮播图以及推荐数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })

    const tab_control = this.selectComponent('#tab-control');
    console.log('组件',tab_control)
    tab_control.setData({

    })

    //请求首页商品数据
    // getGoodsdata(this.data.data).then(res => {
    //   console.log(res)
    // })
    
    this._getGoodsdata()
  },

  handleMyEvent(event) {
    console.log('事件对象',event)
    const currentTitle = event.detail.title;
    const currentIndex = event.detail.index;
    this.data.type = currentTitle;
    this.data.currentIndex = currentIndex;
    this.setData({
      // type: currentTitle,
      data:{
        type: this.data.type,
        page: this.data.page
      }
    })
    this._getGoodsdata()
  },

  _getGoodsdata() { 
    //请求首页商品数据
    
    switch (this.data.currentIndex) {
      case 0: 
          this.data.type = 'pop'; break;
      case 1: 
          this.data.type = 'new'; break;
      case 2:
          this.data.type = 'sell'; break;
      default:
        break;
    }

    this.data.data = {
      type: this.data.type,
      page: this.data.page
    }
    console.log("数据", this.data.data);

    //发请求
    getGoodsdata(this.data.data).then(res => {
      console.log(res)
      this.setData({
        list: res.data.data.list
      })
      // this.data.list = res.data.data.list;
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
    this._getGoodsdata()
  }
})