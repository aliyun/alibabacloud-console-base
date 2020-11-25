import React from 'react'
import { Dialog } from '@alicloud/console-components'
import messages from './messages'
import defaultOptions from './defaultOptions'

const { url: verifyUrl } = defaultOptions

function gotoSetVerificationMethod() {
  window.open(verifyUrl.bindMobileHelp, '_blank')
}

function confirmSettingFinish(verifyMessages) {
  Dialog.confirm({
    title: verifyMessages.setTitle,
    content: verifyMessages.doneTip,
    locale: {
      ok: verifyMessages.doneSet,
      cancel: verifyMessages.gotProblem,
    },
    onCancel: () => {
      gotoSetVerificationMethod()
    },
    needWrapper: false,
  })
}

export function guideToVerificationMethodSetting(verifyType) {
  const verifyMessages = {
    ...messages[verifyType],
    ...messages.others,
  }
  Dialog.confirm({
    title: verifyMessages.setTitle,
    onOk: () => {
      gotoSetVerificationMethod()
      confirmSettingFinish(verifyMessages)
    },
    content: <div>{verifyMessages.setTip}</div>,
    locale: {
      ok: verifyMessages.goSet,
    },
    footerActions: ['ok'],
    needWrapper: false,
  })
}

export function guideToVerificationDetailSetting(verifyType) {
  const verifyMessages = {
    ...messages[verifyType],
    ...messages.others,
  }
  Dialog.confirm({
    title: verifyMessages.title,
    content: verifyMessages.bindDescription,
    onOk: () => {
      gotoSetVerificationMethod()
      confirmSettingFinish(verifyMessages)
    },
    locale: {
      ok: verifyMessages.goSet,
    },
    footerActions: ['ok'],
    needWrapper: false,
  })
}
