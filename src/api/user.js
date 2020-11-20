import request from '@/utils/request'
export function login(data) {
  return request({
    url: 'commonAction!commJsonLogin.action?common.loginName=' + data.username + '&common.password=' + data.password + '&common.applyType=1',
    method: 'get'
  })
}
export function getInfo() {
  return request({
    url: '/user/info',
    method: 'post'
  })
}

// params: { userId: 100003 }

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
