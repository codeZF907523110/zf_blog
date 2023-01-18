/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2023-01-10 10:53:27
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-10 11:15:15
 * @FilePath: /zf-blog/src/api/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default ((r) => {

  const cache = {}
  Object.keys(r).forEach((key) => {
    const Key = key.replace('./map/', '').replace('.ts', '')

    cache[Key] = { ...r[key] } // 两层
  })

  return cache
})(import.meta.globEager('./map/*.ts'))
