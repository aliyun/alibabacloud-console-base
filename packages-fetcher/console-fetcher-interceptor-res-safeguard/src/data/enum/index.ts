/**
 * 引起 Safeguard 的错误码
 */
export enum ESafeguardErrorCode {
  CM = 'CM.Required',
  CF = 'CF.Required'
}

/**
 * 变更原因
 */
export enum EBlockReason {
  FUSING = 'fusing', // 封网 / 熔断期变更，优先级最高
  NON_WINDOW = 'non-window', // 非窗口期（应用自定义）
  FORCED = 'forced', // 强制审批（应用自定义一些配置项必须审批，无论窗口期）
  NORMAL = 'normal' // 普通变更，一般会直接通过
}

export enum EChangeType {
  CM = 'cm',
  CF = 'cf'
}

export enum EChangeOrderStatus {
  // 初始态
  INITIALIZING = 'check_waiting', // 初始化（需要轮询）
  // 中间态
  APPROVAL_WAITING = 'approve_processing', // 等待审批
  APPROVED = 'passed', // 通过，等待执行
  // 终态
  CANCELLED = 'canceled', // 撤销
  REJECTED = 'refused', // 拒绝
  EXEC_SUCCESS = 'exec_success' // 通过，执行成功
}
