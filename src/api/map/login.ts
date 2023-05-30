import { get, JPost, post } from '@/api/request.ts'

// github登录
export const gitHubLogin = get('/api/github/login')

// 登出
export const logOut = get('/api/logOut')