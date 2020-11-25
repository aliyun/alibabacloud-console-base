import { serviceFactory } from '@alicloud/console-request'

/**
 * createService(productId, action) 是一个创建 OpenAPI 请求工具函数的工厂函数。
 *
 * @param {string} [productId] 云产品 ID
 * @param {string} [action] 要执行的操作
 * @return {function} api 请求工具函数
 *
 * 使用示例可参考同目录下的 ./DescribeVpcs.js 文件。
 *
 */
const createService = serviceFactory({
  /**
   * 使用本地开发 server 代理 api 请求至
   * public/api/ 目录下的 json 文件
   */
  apiMockType: 'json-file',
})

export default createService
