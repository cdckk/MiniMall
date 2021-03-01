import request from './base'
//请求轮播图以及推荐数据
export function getMultidata () {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
};

//请求首页商品数据
export function getGoodsdata (type, page) {
  return request({
    url: 'http://152.136.185.210:7878/api/m5/home/data',
    // data: {
    //   type: 'pop',
    //   page: 1
    // }
    data: {
      type,
      page
    }
  })
}