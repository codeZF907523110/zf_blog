/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2023-01-17 16:01:03
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-17 16:37:46
 * @FilePath: /pure-settlement1/src/api/map/userInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { get, JPost, post } from '@/api/request.ts'

// 获取作者信息
export const getUserInfo = JPost('/api/userInfo/getUserInfo')

// 获取最新五条留言
export const getNewMessage = JPost('/api/userInfo/getNewMessage')
