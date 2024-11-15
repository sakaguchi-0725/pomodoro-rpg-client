import { createOpenApiHttp, HttpHandlerFactory, ResponseResolver } from 'openapi-msw'
import type { Mock } from 'vitest'
import { paths } from '../api'

type MockApiOptions = Partial<{
  status: number
  fn: Mock
}>

type Path<T extends 'get' | 'post' | 'put' | 'delete'> = Parameters<HttpHandlerFactory<paths, T>>[0]

type GetPath = Path<'get'>
type PostPath = Path<'post'>
type PutPath = Path<'put'>
type DeletePath = Path<'delete'>

type GetData<T extends GetPath> = ResponseResolver<paths, T, 'get'>
type PostData<T extends PostPath> = ResponseResolver<paths, T, 'post'>
type PutData<T extends PutPath> = ResponseResolver<paths, T, 'put'>
type DeleteData<T extends DeletePath> = ResponseResolver<paths, T, 'delete'>

export const http = createOpenApiHttp<paths>()

export const httpMock = {
  get<T extends GetPath>(path: T, data: GetData<T>, options: MockApiOptions = {}) {
    return http.get(path, async (args) => {
      options.fn?.(args.query)
      return data(args)
    })
  },

  post<T extends PostPath>(path: T, data: PostData<T>, options: MockApiOptions = {}) {
    return http.post(path, async (args) => {
      options.fn?.(args.request)
      return data(args)
    })
  },

  put<T extends PutPath>(path: T, data: PutData<T>, options: MockApiOptions = {}) {
    return http.put(path, async (args) => {
      options.fn?.(args.request)
      return data(args)
    })
  },

  delete<T extends DeletePath>(path: T, data: DeleteData<T>) {
    return http.delete(path, (args) => {
      return data(args)
    })
  },
}