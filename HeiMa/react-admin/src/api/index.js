/**
 * 包含应用中所有请求接口请求函数的模块
 */

// // 1. 统一暴露
// export default {
//   xxx () {

//   },

//   yyy () {

//   }
// }

// 2. 分别暴露
import ajax from './ajax'

// const BASE = 'http://localhost:5000'

// 登陆
export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST')

// 添加用户
export const reqAddUser = user => ajax('/manage/user/add', user, 'POST')
