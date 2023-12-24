/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2023-01-17 16:49:58
 * @LastEditors: 流觞曲水 907523110@qq.com
 * @LastEditTime: 2023-02-07 11:27:59
 * @FilePath: /pure-settlement1/src/plugins/getUserInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import api from '@/api/index'

const getUserInfo = async () => {
  try {
    const { result } = await api.userInfo.getUserInfo({})  
    return () => {
      return result
    }
  } catch (error) {
  }  
}
const USER_INFO = await getUserInfo()
export { USER_INFO }
