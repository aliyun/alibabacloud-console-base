export enum EUserAskCheckStatus {
  UNAVAILABLE_FOR_STS = 'STS_NOT_AVAILABLE', // STS 账号不支持发起对话，需提示用户
  NOT_IN_SERVICE_TIME = 'OUT_OF_TIME', // 不在服务时间内，需提示用户
  SESSION_ALIVE = 'DIALOG_ALIVE', // 会话尚未结束，可直接打开链接
  READY = 'READY' // 条件满足，可以发起对话
}

export enum EUserAskSessionCreateStatus {
  WATING = 'IN_QUEUE', // 排队中（之前创建）
  CREATED = 'DIALOG_CREATE_SUCCESS' // 创建成功（新创建）
}