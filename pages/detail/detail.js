// pages/detail/detail.js
import {getDetail} from '../../service/detail'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    topImages: [],
    desc: '',
    columns: [],
    detailImage: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('iid',options)
    const iid = options.iid
    this.setData({
      iid: iid
    })

    //请求商品详情页数据
    this._getDetail()
  },

  _getDetail() {
    getDetail(this.data.iid).then(res => {
      console.log('商品详情页数据',res)
      //分离数据
      const topImages = res.data.result.itemInfo.topImages;
      const desc = res.data.result.itemInfo.title;
      const columns = res.data.result.columns;
      const imageList = res.data.result.detailInfo.detailImage;
      const detailImage = imageList[0].list;
      this.setData({
        topImages: topImages,
        desc: desc,
        columns: columns,
        detailImage: detailImage
      })
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

  }
})