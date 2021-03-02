import request from './base'

export function getDetail(iid) {
  return request({
    url: 'http://152.136.185.210:7878/api/m5/detail',
    data: {
      iid
    }
  })
}