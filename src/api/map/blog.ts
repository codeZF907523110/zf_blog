/*
 * @Author: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @Date: 2023-01-10 11:09:40
 * @LastEditors: zhangfeng16 zhangfeng16@shuidi-inc.com
 * @LastEditTime: 2023-01-13 11:35:22
 * @FilePath: /zf-blog/src/api/map/blog.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { get, JPost, post } from '@/api/request.ts'

// 发布文章
export const saveBlog = JPost('/api/blog/saveBlog')

// 上传图片
export const uploadPictures = post('/api/blog/uploadPictures')

// 条件查询博客
export const getAllBlog = JPost('/api/blog/getAllBlog')

// 点赞
export const giveALike = JPost('/api/blog/giveALike')

// 增加阅读量
export const addOpenNum = JPost('/api/blog/addOpenNum')

// 添加标签
export const addLabel = JPost('/api/label/addLabel')

// 获取标签
export const getLabels = JPost('/api/label/getLabels')

// 评论或留言
export const setMessage = JPost('/api/message/setMessage')

// 获取留言或评论
export const getMessages = JPost('/api/message/getMessages')