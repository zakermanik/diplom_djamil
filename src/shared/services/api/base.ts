import { makeRequest } from './http'
import { API_METHODS, SERVICE_METHOD_ERRORS } from '@/shared/config/service'
import type { BaseApi, BaseResponse } from '@/shared/types/api'

function clearEmptyParams(params: object) {
  return Object.fromEntries(Object.entries(params).filter(([_, value]) => !!value || typeof value === 'boolean'))
}

export class BaseApiService<T, U = null> implements BaseApi {
  constructor(
    public endpoint: string = '',
    public methods: string[] = [
      API_METHODS.GET,
      API_METHODS.CREATE,
      API_METHODS.PARTIAL_UPDATE,
      API_METHODS.UPDATE,
      API_METHODS.DELETE,
    ],
  ) {
    this.endpoint = endpoint
    this.methods = methods
  }

  public async getOne(id: string | number): Promise<BaseResponse<U>> {
    if (!this.methods.includes(API_METHODS.GET))
      throw new Error(SERVICE_METHOD_ERRORS.GET)

    return makeRequest<U>({
      url: `${this.endpoint}/${id}/`,
      method: API_METHODS.GET,
    })
  }

  public getAll(params: any = {}): Promise<BaseResponse<T>> {
    if (!this.methods.includes(API_METHODS.GET))
      throw new Error(SERVICE_METHOD_ERRORS.GET)

    return makeRequest<T>({
      url: `${this.endpoint}/`,
      method: API_METHODS.GET,
      params: clearEmptyParams(params),
    })
  }

  public update(id: string | number, data: Omit<T, 'id'>): Promise<BaseResponse<T>> {
    if (
      !this.methods.includes(API_METHODS.PARTIAL_UPDATE)
      || !this.methods.includes(API_METHODS.UPDATE)
    )
      throw new Error(SERVICE_METHOD_ERRORS.UPDATE)
    return makeRequest<T>({
      url: `${this.endpoint}/${id}/`,
      method: API_METHODS.PARTIAL_UPDATE,
      data,
    })
  }

  public remove(id: string | number): Promise<BaseResponse<T>> {
    if (!this.methods.includes(API_METHODS.DELETE))
      throw new Error(SERVICE_METHOD_ERRORS.DELETE)

    return makeRequest<T>({
      url: `${this.endpoint}/${id}/`,
      method: API_METHODS.DELETE,
    })
  }

  public create(data: Partial<T>): Promise<BaseResponse<T>> {
    if (!this.methods.includes(API_METHODS.CREATE))
      throw new Error(SERVICE_METHOD_ERRORS.CREATE)

    return makeRequest<T>({
      url: `${this.endpoint}/`,
      method: API_METHODS.CREATE,
      data,
    })
  }

  public createReport(data = {}, endpoint: string) {
    if (!this.methods.includes(API_METHODS.CREATE))
      throw new Error(SERVICE_METHOD_ERRORS.CREATE)

    return makeRequest<T>({
      url: `${this.endpoint}/${endpoint}/`,
      method: API_METHODS.CREATE,
      responseType: 'blob',
      data,
    })
  }

  public createFile(id: string | number, type: string): Promise<BaseResponse<T>> {
    if (!this.methods.includes(API_METHODS.CREATE))
      throw new Error(SERVICE_METHOD_ERRORS.CREATE)

    return makeRequest<T>({
      url: `${this.endpoint}/${id}/${type}/`,
      method: API_METHODS.CREATE,
      responseType: 'blob',
    })
  }

  public createFileJpeg(data = {}, endpoint: string): Promise<BaseResponse<T>> {
    if (!this.methods.includes(API_METHODS.CREATE))
      throw new Error(SERVICE_METHOD_ERRORS.CREATE)

    return makeRequest<T>({
      url: `${this.endpoint}/${endpoint}/`,
      method: API_METHODS.CREATE,
      data,
    })
  }
}
