import { get, JPost, post } from '@/api/request.ts'

// github登录
export const gitHubLogin = get('/api/github/login')

// 登出
export const logOut = get('/api/logOut')

// 获取是否有admin权限
export const getIsAdmin = get('/api/getIsAdmin')

// QQ登录
export const qqLogin = get('/api/QQ/login')