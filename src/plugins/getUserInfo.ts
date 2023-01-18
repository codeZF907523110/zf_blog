/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2023-01-17 16:49:58
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-17 17:00:57
 * @FilePath: /pure-settlement1/src/plugins/getUserInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import api from '@/api/index'

export const getUserInfo =  () => {
  let userInfo = {}
  const info = sessionStorage.getItem('userInfo')
  if (info) {
    userInfo = JSON.parse(info)
    return userInfo
  }
  api.userInfo.getUserInfo({}).then(({ result }) => {
    console.log(result, 'result')
    userInfo = result
    sessionStorage.setItem('userInfo', JSON.stringify(result))
    return userInfo
  })
}
