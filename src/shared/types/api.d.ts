import type { ResponseType } from 'axios'

export interface BaseApi {
  endpoint?: string
  methods?: string[]

  getOne: (id: number | string) => Promise<any>

  getAll: (params: any) => Promise<any>

  update: (id: number | string, data: any) => Promise<any>

  remove: (id: number | string) => Promise<any>

  create: (data: any) => Promise<any>

  createFile: (id: number | string, type: string) => Promise<any>

  createReport: (data: any, endpoint: string) => Promise<any>

  createFileJpeg: (data: any, endpoint: string) => Promise<any>
}

export interface BaseResponse<T> {
  data: T
}

export interface TableData<T> {
  count: number
  next: string | null
  prevent: string | null
  results: T[]
}

export interface ErrorResponse {
  response: {
    data: {
      msg: string
    }
  }
}

export interface Request {
  url: string
  method?: string
  responseType?: ResponseType
  headers?: any
  params?: any
  data?: any
  paramsSerializer?: (params: object | string) => string
}
