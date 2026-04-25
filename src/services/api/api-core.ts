import { ApiResponse, ApisauceInstance, create } from 'apisauce'

import { API_BASE_URL } from '@/config/env'
import { camelizeKeys, snakeCaseKeys } from '@/services/api/helpers/object'

import { ApiParams, RequestMethod } from './api-core.types'
import { getGeneralApiProblem } from './helpers/api-problem'
import { serialize } from './helpers/serialize-formdata'

export class ApiCore {
  protected baseURL = API_BASE_URL.replace(/\/$/, '') || ''
  protected api: ApisauceInstance

  /**
   * Use multipart/form-data content type.
   * For file uploading
   */
  protected multipart = false

  /**
   * API Request timeout in milliseconds.
   */
  protected timeout = 50000

  /**
   * Enable blob response type.
   * For file downloading
   */
  protected enableBlobResponse = false

  /**
   * Convert request object key to snake case.
   */
  protected useSnakedKey = false

  /**
   * Add a wrapper object around passed data.
   */
  protected payloadWrapper?: string

  protected addResponseTypeTransformer() {
    this.api.addRequestTransform((request) => {
      if (this.enableBlobResponse) {
        request.responseType = 'blob'
      }
    })
  }

  protected addRequestParamsTransformer() {
    this.api.addRequestTransform((request) => {
      if (this.useSnakedKey) {
        request.params = snakeCaseKeys(request.params)
      }
    })
  }

  protected addPayloadTransformer() {
    this.api.addRequestTransform((request) => {
      const data = this.payloadWrapper
        ? { [this.payloadWrapper]: request.data }
        : request.data

      if (this.multipart) {
        request.data = serialize(data, {
          nullsAsUndefined: true,
          useSnakedKey: this.useSnakedKey
        })
      } else {
        request.data = this.useSnakedKey ? snakeCaseKeys(data) : data
      }
    })
  }

  protected addResponseTransformer() {
    this.api.addResponseTransform((response) => {
      if (this.useSnakedKey) {
        response.data = camelizeKeys(response.data)
      }
    })
  }

  protected addResponsePerfMetric() {
    this.api.axiosInstance.interceptors.response.use(
      async function (response: any) {
        try {
          const httpMetric = response?.config?.metadata?.httpMetric
          if (httpMetric) {
            httpMetric.setHttpResponseCode(response.status)
            httpMetric.setResponseContentType(response.headers['content-type'])
            await httpMetric.stop()
          }
        } finally {
          return response
        }
      },
      async function (error) {
        try {
          const httpMetric = error?.config?.metadata?.httpMetric
          if (httpMetric && error.response) {
            httpMetric.setHttpResponseCode(error.response.status)
            httpMetric.setResponseContentType(
              error.response.headers['content-type']
            )
            await httpMetric.stop()
          }
        } finally {
          return Promise.reject(error)
        }
      }
    )
  }

  protected getBaseURL() {
    return this.baseURL.replace(/\/$/, '')
  }

  constructor() {
    this.api = create({
      timeout: this.timeout,
      baseURL: this.getBaseURL(),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    this.addResponseTypeTransformer()
    this.addRequestParamsTransformer()
    this.addPayloadTransformer()
    this.addResponseTransformer()
    this.addResponsePerfMetric()
  }

  protected async processResult(response: ApiResponse<any>) {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return Promise.reject(problem)
    }

    return Promise.resolve(response)
  }

  protected async callApi(
    method: RequestMethod,
    { path, payload, options = {} }: ApiParams
  ) {
    const response: ApiResponse<any> = await this.api[method](path, payload, {
      baseURL: this.getBaseURL(),
      ...options
    })

    return await this.processResult(response)
  }

  protected async get(apiParams: ApiParams) {
    return await this.callApi('get', apiParams)
  }

  protected async post(apiParams: ApiParams) {
    return await this.callApi('post', apiParams)
  }

  protected async put(apiParams: ApiParams) {
    return await this.callApi('put', apiParams)
  }

  protected async patch(apiParams: ApiParams) {
    return await this.callApi('patch', apiParams)
  }

  protected async delete({ path, payload }: ApiParams) {
    return await this.processResult(
      await this.api.delete(
        path,
        {},
        { data: payload, baseURL: this.getBaseURL() }
      )
    )
  }
}
