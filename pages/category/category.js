// pages/category/category.js
import { 
  getCategory, 
  getSubCategory
} from '../../service/category'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    isActive: false,
    currentIndex: 0,
    categoryContentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求商品分类标题数据
    this._getCategory()
    
    //请求具体某个商品分类的内容
    
  },

  _getCategory() {
    getCategory().then(res => {
      console.log('分类标题',res)
      const list = res.data.data.category.list;
      this.setData({
        categoryList: list,
      })
      this._getSubCategory()
    })
    
  },

  _getSubCategory() {
    const maitKey = this.data.categoryList[this.data.currentIndex].maitKey;
    getSubCategory(maitKey).then(res => {
      console.log('分类内容',res)
      const categoryContentList = res.data.data.list;
      this.setData({
        categoryContentList: categoryContentList
      })
    })
  },

  tabMenuClick(event) {
    const currentIndex = event.detail.currentIndex;
    this.setData({
      currentIndex: currentIndex
    })
    this._getSubCategory()
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

  }
})