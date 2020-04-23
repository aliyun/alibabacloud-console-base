import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Grid, Form } from '@alicloud/console-components'
import axios from 'axios'
import {
  getSecToken,
  getUmid,
  getCollina,
} from '@alicloud/widget-utils-console'
import searchParamsInterceptor from '@alicloud/search-params-interceptor'
import messages from './messages'
import defaultOptions from './defaultOptions'

const { Col, Row } = Grid
const ItemLayout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
}
const axiosInstance = axios.create()
// use interceptor
axiosInstance.interceptors.request.use(searchParamsInterceptor)

const { url: verifyUrl } = defaultOptions

class VerifyForm extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.state = {
      isCountdownStarted: false,
      countdown: 0,
    }
    // Bind the methods
    this.onInputChange = this.onInputChange.bind(this)
    this.onGenerateVerifyCode = this.onGenerateVerifyCode.bind(this)
    this.startCountdownTimer = this.startCountdownTimer.bind(this)
    this.updateCountdown = this.updateCountdown.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  onInputChange(value) {
    this.props.setVerifyCode(value.trim())
  }

  async onGenerateVerifyCode() {
    this.startCountdownTimer()

    const {
      options: { codeType, verifyType },
      setRequestId,
    } = this.props
    const reqData = {
      codeType,
      verifyType,
      sec_token: getSecToken(),
      umid: getUmid(),
      collina: getCollina(),
    }

    try {
      const res = await axiosInstance({
        method: 'post',
        url: verifyUrl.generateVerificationCode,
        data: reqData,
        timeout: 15000,
      })

      const {
        data: { data: resData },
      } = res
      if (!resData) {
        throw new Error('[generateVerifyCode] failed')
      }

      setRequestId(resData.requestId) // 保存发送验证码请求的 requestId
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('[onGenerateVerifyCode] failed: ', e.message)
      // this.props.onError(e)
      // setRequestId('Fake requestId')
    }
  }

  startCountdownTimer() {
    this.updateCountdown(60)
    this.timer = setInterval(() => {
      if (this.state.countdown <= 0) {
        this.clearTimer()
        return
      }
      this.updateCountdown(--this.state.countdown) // eslint-disable-line
    }, 1000)
  }

  updateCountdown(value) {
    this.setState({
      countdown: value,
      isCountdownStarted: value !== 0,
    })
  }

  clearTimer() {
    clearInterval(this.timer)
  }

  render() {
    const {
      options: { verifyType, verifyDetail, isVerifyCodeValid },
    } = this.props

    const verifyMessages = {
      ...messages[verifyType],
      ...messages.others,
    }

    const { isCountdownStarted, countdown } = this.state

    return (
      <Form style={{ width: '500px' }} labelTextAlign="right">
        <Form.Item label={verifyMessages.detailDescription} {...ItemLayout}>
          <div className="next-form-text-align">
            <span>{verifyDetail} </span>
            <a
              href={verifyUrl.changeVerificationMethod}
              rel="noopener noreferrer"
              target="_blank"
            >
              {verifyMessages.changeDescription}
            </a>
          </div>
        </Form.Item>
        <Form.Item
          label={verifyMessages.settingLabel}
          {...ItemLayout}
          validateState={!isVerifyCodeValid ? 'error' : 'success'}
          help={!isVerifyCodeValid ? verifyMessages.codeInvalid : ''}
        >
          <Row>
            <Col>
              <Input onChange={this.onInputChange} style={{ width: 80 }} />
            </Col>
            {
              // sms or email时，才需要发送行为
              verifyType !== 'ga' ? (
                <Col>
                  {isCountdownStarted ? (
                    <Button disabled>
                      {`${verifyMessages.reSend.replace('{s}', countdown)}`}
                    </Button>
                  ) : (
                    <Button onClick={this.onGenerateVerifyCode}>
                      {verifyMessages.sendCode}
                    </Button>
                  )}
                </Col>
              ) : null
            }
          </Row>
        </Form.Item>
      </Form>
    )
  }
}

VerifyForm.propTypes = {
  options: PropTypes.shape({
    codeType: PropTypes.string,
    verifyType: PropTypes.string,
    verifyDetail: PropTypes.string,
    isVerifyCodeValid: PropTypes.bool,
  }),
  setRequestId: PropTypes.func,
  setVerifyCode: PropTypes.func,
  onError: PropTypes.func,
}

export default VerifyForm
