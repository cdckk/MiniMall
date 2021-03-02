import request from './base.js'

export function getCategory() {
  return request({
    url: 'http://152.136.185.210:7878/api/m5/category'
  })
}

export function getSubCategory(maitKey){
  return request({
    url: 'http://152.136.185.210:7878/api/m5/subcategory',
    data: {
      maitKey
    }
  })
}