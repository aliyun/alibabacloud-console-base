import createService from './createService'

/**
 *
 * 更多关于 createService(productId, action) 函数的用法
 * 可参见同目录下的 ./createService.js 文件
 *
 * DescribeVpcs(params)
 *
 * @param {object} [params] DescribeVpcs 接口调用参数
 * @param {string} [params.RegionId] 区域 ID，如：cn-hangzhou
 * @param {number} [params.PageNumber=1] 当前页
 * @param {number} [params.PageSize=10] 页面尺寸
 * @param {string} [params.VpcId]
 * @param {string} [params.VpcName]
 * @param {boolean} [params.IsDefault]
 * @param {boolean} [params.DryRun]
 * @param {string} [params.ResourceGroupId]
 *
 * 有关 DescribeVpcs 接口的更多内容参见：https://help.aliyun.com/document_detail/35739.html
 *
 * @return {promise} resolve 接口的请求结果
 *
 */
const DescribeVpcs = createService('vpc', 'DescribeVpcs')

export default DescribeVpcs
