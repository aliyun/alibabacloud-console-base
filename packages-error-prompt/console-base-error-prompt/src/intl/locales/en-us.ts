export default {
  'op:close': 'Close',
  'op:cancel': 'Cancel',
  'op:sign_in': 'Sign In',
  'op:reload_page': 'Reload Page',
  'title:normal': 'Error Prompt',
  'title:session_timeout': 'Session Timeout',
  'title:token_expired': 'Token Expired',
  'title:api_not_exist': 'API Not Exist',
  'title:access_denied': 'Access Denied',
  'message:sign_in': 'Current session has timed out, please sign in.',
  'message:token_expired': 'Current token has expired, please reload the page.',
  'message:access_denied_1': `{key, select,
    ImplicitDeny {You are not allowed to perform this action.}
    ExplicitDeny {You are explicitly denied to perform this action.}
    other {key}
  }`,
  'message:access_denied_2': `{key, select,
    ControlPolicy {Please contact your resource directory administrators to check control policies.}
    other {Please contact your account administrators to grant permissions via RAM.}
  }`,
  'message:api_not_exist': 'Requested API does not exist, please contact Alibaba Cloud service.'
};
