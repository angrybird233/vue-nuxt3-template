import { ElMessage, ElLoading } from 'element-plus'
const { VITE_APP_API_ROOT } = import.meta.env;
let loadingInstance: any = null;

type ResType = {
  data?: any,
  httpCode?: number,
  status?: string,
  statusCode?: number,
  message?: string
}
type FetchType = typeof $fetch
type FetchOptions = Parameters<FetchType>[1]
type Methods = "GET" | "POST" | "DELETE" | "PUT";



class HttpRequest {
  async request<T = any>(
    url: string,
    method: Methods,
    data: any,
    options?: FetchOptions,
  ) {
    const newOptions: FetchOptions = {
      // baseURL: VITE_APP_API_ROOT,
      method: method,
      onRequest({ options }) {
        if (method === "GET" || method === "DELETE") {
          options.params = data;
        }
        if (method === "POST" || method === "PUT") {
          options.body = data;
        }
        loadingInstance = ElLoading.service({
          fullscreen: true,
          background: "rgba(0,0,0,0.1)"
        })
        // 添加请求头
        // options.headers.set('Authorization', `Bearer`)
      },
      // 响应拦截
      onResponse({ response }) {
        loadingInstance?.close();
        if(response.status === 200 ){
          return response._data
        }else{
          ElMessage.error(response?._data?.message || '请求异常')
          return Promise.reject(response._data)
        }
      },
      // 错误处理
      onResponseError({ response }) {
        ElMessage.error(`错误:${response.status}`)
        return Promise.reject(response?._data ?? null)
      },
      ...options
    };
    
    try {
      const response: ResType   = await $fetch(url, newOptions)
      const { httpCode, statusCode, status } = response
      if ( 
        httpCode == 200 && statusCode == 0 && status == "success"
      ) {
        return response
      } else {
        return Promise.reject(response?.data);
      }
    } catch (error) {
      console.error(error)
    }
  }

  // 封装常用方法

  get<T = any>(url: string, params?: any, options?: FetchOptions) {
    return this.request(url, "GET", params, options);
  }

  post<T = any>(url: string, data: any, options?: FetchOptions) {
    return this.request(url, "POST", data, options);
  }

  Put<T = any>(url: string, data: any, options?: FetchOptions) {
    return this.request(url, "PUT", data, options);
  }

  Delete<T = any>(url: string, params: any, options?: FetchOptions) {
    return this.request(url, "DELETE", params, options);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;

