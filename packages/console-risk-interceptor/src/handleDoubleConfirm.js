import axios from 'axios'
import { URLSearchParams } from '@alicloud/search-params-interceptor'
import defaultOptions from './defaultOptions'
import getVerifyInformation from './getVerifyInformation'
import {
  guideToVerificationMethodSetting,
  guideToVerificationDetailSetting,
} from './helpers'

const axiosInstance = axios.create()

const { code } = defaultOptions
function isVerifyCodeValid(res) {
  if (res && res.data && res.data.code === code.verifyCodeInvalid) {
    return false
  }
  return true
}

/*
 * 如果处理二次验证失败，内部失败的原因是要自己消化或者吞掉？
 * 还是把它透出到上层的调用方呢？
 * 1. 内部吞掉，则统一对外透出原来的 reponse，使用方不感知 interceptor 这一层的存在
 * 2. 向外透出，外部知道验证在那一层失败，或许可以做点事情补救一下
 * 暂时先采用方案 1，不对外透出。后面有时间来细想一下方案 2 该怎么做
 */
/* eslint-disable no-console */
async function handleDoubleConfirm(response) {
  const { data: responseData } = response
  const { data: riskData } = responseData
  const { verifyType, verifyDetail, codeType } = riskData

  // 用户未设置验证的类型 sms|email|ga
  if (!verifyType) {
    guideToVerificationMethodSetting(verifyType)
    return response
  }

  // sms|email 类型的验证需要填写验证的电话或邮箱地址
  if (!verifyDetail && (verifyType === 'sms' || verifyType === 'email')) {
    guideToVerificationDetailSetting(verifyType)
    return response
  }

  let newResponse = null
  // 记录上一次发送验证信息的 requestId，这个信息只在用户输入了错误的验证码的时候有效
  // 记录它的原因在于如果用户输入了验证码，我们就需要拿着这些信息去后台验证
  // 但是如果用户没有点击重新发送，那就不会产生新的 requestId，这个时候我们就需要复用上一次
  let lastRequestId
  /* eslint-disable no-await-in-loop */
  while (
    newResponse === null || // 第一次，尚未进行风控验证
    !isVerifyCodeValid(newResponse) // 或者验证码不对
  ) {
    let requestId
    let verifyCode

    const options = {
      isVerifyCodeValid: isVerifyCodeValid(newResponse),
      verifyType,
      verifyDetail,
      codeType,
      lastRequestId, // 上一次 requestId，如果未曾发送过验证码则为 undefined
    }
    try {
      // 获取风控的验证信息
      const { reqId, vCode } = await getVerifyInformation(options)
      requestId = reqId
      verifyCode = vCode
      // 记录上一次发送验证码请求的 requestId
      lastRequestId = requestId
    } catch (e) {
      console.error('[getVerifyInformation] failed: ', e.message)
      return response
    }

    try {
      // 拿出上一次请求的参数
      const {
        config: { data: reqDataString, url: reqUrl },
      } = response
      const reqData = new URLSearchParams(reqDataString)
      // 添加我们的风控参数
      reqData.append('verifyType', verifyType)
      verifyCode && reqData.append('verifyCode', verifyCode)
      requestId && reqData.append('requestId', requestId)

      // 发送请求
      // 这里不处理异常 Promise，未处理的异常会进入到上层
      newResponse = await axiosInstance({
        method: 'post',
        url: reqUrl,
        data: reqData,
      })
    } catch (e) {
      console.error('[verify Request] failed: ', e.message)
      // 如果获取验证信息失败，则返回原始的 response
      return response
    }
  }

  return newResponse
}

export default handleDoubleConfirm
