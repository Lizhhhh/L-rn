/**
 * 能发送异步 ajax 请求的函数模块
 * 封装 axios 库
 * 函数的返回值是 promise 对象
 */

import axios from 'axios';

export default function ajax(url, data ={}, type='GET') {
  if(type === 'GET') {
    return axios.get(url, {
      params: data
    })
  } else {
    return axios.post(url, data)
  }
}


// 请求登录接口
ajax('/login', {username: 'Tom', password: '12345'}, 'POST').then()

// 添加用户
ajax('/manage/user/add', {username: 'Tom', password: '12345', phone: '13712341234'}, 'POST').then()
