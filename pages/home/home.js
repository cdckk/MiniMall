// pages/home/home.js
import {getGoodsdata, getMultidata} from '../../service/home'

const types = ['pop','new','sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    type: 'pop',
    currentIndex: 0,
    goods: {
      'pop': { page: 0, list: []},
      'new': { page: 0, list: []},
      'sell': { page: 0, list: []}
    },
    isShow: false,
    topPosition: 0,
    showTabControl: false
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
    this._getGoodsdata('pop')
    this._getGoodsdata('new')
    this._getGoodsdata('sell')
  },

  handleMyEvent(event) {
    console.log('事件对象',event)
    const currentTitle = event.detail.title;
    const currentIndex = event.detail.index;
    
    // const type = types[currentIndex];
    // this.setData({
    //   type: type
    // })
    switch (currentIndex) {
      case 0: 
        this.setData({
          type: 'pop'
        }); break;
      case 1: 
        this.setData({
          type: 'new'
        }); break;
      case 2:
        this.setData({
          type: 'sell'
        }); break;
      default:
        break;
    }
  },

  _getGoodsdata(type) { 
    //请求首页商品数据
    const page = this.data.goods[type].page + 1;
    getGoodsdata(type, page).then(res => {
      const list = res.data.data.list;
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${page}.list`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
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

  },

  //监听页面滚动到底部
  // onReachBottom() {
  //   console.log('页面滚动到底部')
  //   this._getGoodsdata(this.data.type);
  //   this.setData({
  //     isShow: true
  //   })
  // },

  //滚动底部
  scrollBottom() {
    //请求更多商品数据
    this._getGoodsdata(this.data.type);
    // this.setData({
    //   isShow: true
    // })
  },

  //监听滚动
  scroll(e) {
    const scrollTop = 500;
    if(e.detail.scrollTop >= scrollTop) {
      this.setData({
        isShow: true,
        showTabControl: true
      })
    }else {
      this.setData({
        isShow: false,
        showTabControl: false
      })
    }

    // e.detail.scrollTop >= scrollTop ? this.setData({
    //   isShow: true,
    //   showTabControl: true
    // }) : this.setData({
    //   isShow: false,
    //   showTabControl: false
    // })
  },

  //滚到顶部方法
  backTopClick() {
    this.setData({
      topPosition: 0
    })
  }
})