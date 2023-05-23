/**
 * 变更原因
 */
export enum EBlockReason {
  FUSING = 'fusing', // 封网 / 熔断，优先级最高
  NON_WINDOW = 'non-window', // 非窗口期（应用自定义）
  FORCED = 'forced', // 强制审批（应用自定义一些配置项必须审批，无论窗口期）
  NORMAL = 'normal' // 普通变更，一般会直接通过
}

export enum EChangeOrderStatus {
  CHECK_WAITING = 'check_waiting', // 初始化（需要轮询） - 初始态
  APPROVE_PROCESSING = 'approve_processing', // 等待审批 - 中间态
  PASSED = 'passed', // 通过，等待执行- 中间态
  EXEC_SUCCESS = 'exec_success', // 通过，执行成功  - 终态
  REFUSED = 'refused', // 拒绝 - 终态
  CANCELED = 'canceled' // 已撤销 - 终态
}
