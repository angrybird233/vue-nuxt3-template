
// const { VITE_APP_API_ROOT } = import.meta.env
import http from './fetch'

// 获取合作类型
export const getCooraprationTypeOptions = async (): Promise<any> => {
  try {
    return await http.post(`/web/message/type-list`,{ type: 2 })
  } catch (error) {
    console.error(error);
  }
}

// 获取新闻列表
export const getNewsList = async (params: any): Promise<any> => {
  try {
    return await http.post(`/web/news/list`, params)
  } catch (error) {
    console.error(error);
  }
}

// 获取新闻详情
export const getNewsDetail = async (params: any): Promise<any> => {
  try {
    return http.post(`/web/news/detail`, params)
  } catch (error) {
    console.error(error);
  }
}

// 提交合作表单
export const submitCooperation = async (params: any): Promise<any> => {
  try {
    return await http.post(`/web/message/save`, params)
  } catch (error) {
    console.error(error);
  }
}

