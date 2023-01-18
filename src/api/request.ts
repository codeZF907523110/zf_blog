import Axios from 'axios'
import VueCookies from 'vue-cookies'
import qs from 'qs'
import { ElNotification } from 'element-plus'
let config = {
  baseURL: 'http://localhost:3006',
  timeout: 120 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    token: '',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const axios = Axios.create(config)

axios.defaults.transformRequest = (body) => {
  const data = body || {}
  if (body instanceof window.FormData) {
    return body
  }
  if (data.jPost) {
    return JSON.stringify(data.body)
  }
  return qs.stringify(data)
}

// 请求拦截
axios.interceptors.request.use(config => {
    let contentType = ''
    if(config.body) {
      if (config.body.jPost) {
        contentType = 'application/json'
      }
    } else {
      contentType = config.headers['Content-Type']
    }
    return {
      ...config,
      headers: {
        token: VueCookies.get('SDB_ssoToken')|| '',
        'Content-Type': contentType
      }
    };
  },error => {
    return Promise.reject(error)
  }
);

// 响应拦截
axios.interceptors.response.use(response => {
    const data = response.data
    // if (data.code !== 0 && !(data instanceof Blob)){
    //   ElNotification({
    //     title: 'Error',
    //     message: data.msg,
    //     type: 'error',
    //   })
    //   throw new Error()
    // }
    return response.data
  }
  // error => {
  //   ElNotification({
  //     title: 'Error',
  //     message: error,
  //     type: 'error',
  //   })
  //   return Promise.reject(error)
  // }
)

export const post = (url) => (body, params) => {
  let URL = url
  if (params) {
    Object.keys(params).forEach(item => {
      URL = URL.replace(`{${item}}`, params[item])
    })
  }
  return new Promise((resolve, reject) => {
    axios.post(URL, body).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const JPost = (url) => (body) => {
  let URL = url
  if (body && body.type === 'replaceContent') {
    URL = URL.replace('replaceContent', body.replaceContent)
  }
  return new Promise((resolve, reject) => {
    axios.post(URL, {
      jPost: true,
      body
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export const QPost = (url) => (body) => {
  let Url = `${url}?`
  for (const key in body) {
    Url = `${Url}${key}=${body[key]}&`
  }
  return new Promise((resolve, reject) => {
    axios.post(Url).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
export const get = (url) => (body) => {
  let Url = `${url}?`
  for (const key in body) {
    Url = `${Url}${key}=${body[key]}&`
  }
  return new Promise((resolve, reject) => {
    axios.get(Url).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
export const download = (url) => (body) => {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      jPost: true,
      body,
    },{
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'blob'
    }).then(res => {
      let eleLink = document.createElement('a')
      eleLink.download = body.fileName
      eleLink.style.display = 'none'
      // 字符内容转变成blob地址
      let blob = new Blob([res])
      eleLink.href = URL.createObjectURL(blob)
      // 自动触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
    }).catch(error => {
      reject(error)
    })
  })
}
export const getDownload = (url) => (body) => {
  let Url = `${url}?`
  for (const key in body) {
    Url = `${Url}${key}=${body[key]}&`
  }
  return new Promise((resolve, reject) => {
    axios.get(Url, {responseType: 'blob'}).then(res => {
      let eleLink = document.createElement('a')
      eleLink.download = body.fileName
      eleLink.style.display = 'none'
      // 字符内容转变成blob地址
      let blob = new Blob([res])
      eleLink.href = URL.createObjectURL(blob)
      // 自动触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
    }).catch(error => {
      reject(error)
    })
  })
}
export default axios;
