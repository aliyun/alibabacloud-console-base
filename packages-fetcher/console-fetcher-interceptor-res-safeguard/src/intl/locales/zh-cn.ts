export default {
  'safeguard:title': '安全生产',
  'safeguard:op:submit': '执行变更',
  'safeguard:op:cancel': '取消',
  
  'safeguard:block_reason': '拦截原因',
  'safeguard:block_reason_normal': '常规变更',
  'safeguard:block_reason_fusing': '封网 / 熔断期变更',
  'safeguard:block_reason_non_window': '非发布窗口变更',
  'safeguard:block_reason_forced': '强制审批变更',
  
  'safeguard:message:block_reason_fusing_{urlCalendar}!html': '在集团封网 / 熔断期间的变更必须经过审批，<a href="{urlCalendar}" target="_blank" rel="noopener">封网日历</a>。',
  'safeguard:message:block_reason_non_window': '应用设置了发布窗口期，非窗口期的变更必须经过审批。',
  'safeguard:message:block_reason_forced': '应用对某些配置项设置了强制审批，任何对这些配置项的变更必须经过审批。',
  
  'change_order:attr:_': '变更单',
  'change_order:attr:time_created': '创建时间',
  'change_order:attr:time_modified': '更新时间',
  
  'change_order:op:create': '新建变更单',
  'change_order:op:restart_polling': '再次轮询',
  'change_order:op:refresh_status': '刷新状态',
  
  'safeguard:message:change_blocked!html': '操作被拦截，需 <em>审批通过</em> 方可继续执行变更。',
  'safeguard:message:change_order_create_error': '变更单创建失败，请重试。',
  'safeguard:message:change_order_status_initializing_polling_left_{times}!html': '变更单初始化未完成，系统自动轮询中，剩余轮询次数：<em>{times}</em>。',
  'safeguard:message:change_order_status_approval_waiting_{url}!html!lines': `变更单审批中，点此 <a href="{url}" target="_blank" rel="noopener">查看详情</a>。
审批需要时间，可关闭当前弹窗，在 <em>变更管理</em> 下找到相应的变更单进行操作。`,
  'safeguard:message:change_order_status_approved!html': '变更单审批 <em>已通过</em>，可继续执行变更。',
  'safeguard:message:change_order_status_cancelled!html': '检测到变更单状态为 <em>已撤销</em>，无法继续提交，请关闭当前弹窗重新操作。',
  'safeguard:message:change_order_status_rejected!html': '检测到变更单状态为 <em>已回绝</em>，无法继续提交，请关闭当前弹窗重新操作。',
  'safeguard:message:change_order_status_finished!html': '检测到变更单状态为 <em>已完成</em>，无法继续提交，请关闭当前弹窗重新操作。',
  'safeguard:message:change_order_status_{abnormal}!html': '检测到变更单状态异常 <em>{abnormal}</em>，无法继续提交，请关闭当前弹窗重新操作。'
};
