export default {
  'attr:phone': 'Phone Number',
  'attr:email': 'Email',
  'attr:mfa': 'Virtual MFA Device',
  'attr:code': 'Verification Code',
  'op:confirm': 'OK',
  'op:cancel': 'Cancel',
  'op:risk_forbidden': 'Operation Abort',
  'op:risk_invalid_go': 'Complete the Settings in New Window',
  'op:risk_invalid': 'Set',
  'op:verify_by_phone': 'Phone Verification',
  'op:verify_by_email': 'Email Verification',
  'op:verify_by_mfa': 'MFA Verification',
  'op:send_code': 'Send',
  'op:change_phone': 'Change',
  'op:change_email': 'Change',
  'op:change_mfa': 'Unbind',
  'op:resend_after_{n}s': 'Resend in {n} Second(s)',
  'message:invalid_unknown!lines': `No verification method has been set.
To protect your account, set a verification method.`,
  'message:invalid_unsupported_{method}!html!lines': `Verification method <code>{method}</code> is not supported.
To protect your account, set a verification method.`,
  'message:forbidden': 'The operation failed due to a severe security risk. Please submit a ticket.',
  'message:code_required': 'Please input validation code.',
  'message:code_send_error': 'Validation code send failed, try again later.',
  'message:code_incorrect': 'Validation code incorrect, enter again.',
  'message:verify_cancelled': 'Verification cancelled by user.',
  'message:no_get_code_url': 'No URL for getting verification code is set, please contact the developer.',

  'op:previous_step': 'Previous',
  'op:retry': 'Retry',
  'op:skip': 'Skip',
  'attr:vmfa_auth_userName': 'UserName',
  'attr:vmfa_auth_code': 'Verification Code',
  'attr:vmfa_bind_code1': 'The First Security Code',
  'attr:vmfa_bind_code2': 'The Second Security Code',
  'attr:vmfa_bind_info_title': 'Authentication Information',
  'attr:vmfa_bind_info_account': 'UserName: ',
  'attr:vmfa_bind_info_key': 'Key: ',
  'attr:u2f_insert': 'Insert the U2F security key into the USB port of the computer',
  'attr:u2f_click': 'Tap the button on the U2F security key',
  'attr:u2f_auth_title': 'Please follow the instructions below to verify the U2F security key',
  'attr:u2f_bind_title': 'Please follow the instructions below to bind the U2F security key',
  'attr:mfa_choose_vmfa': 'Virtual MFA Device',
  'attr:mfa_choose_u2f': 'U2F Security Key',
  'attr:mfa_show_secret': 'Show Key',
  'attr:mfa_hide_secret': 'Hide Key',
  'title:main': 'Safety Verification',
  'title:sub_vmfa_bind': 'Bind Virtual MFA Device',
  'title:sub_u2f_bind': 'Bind U2F Security Key',
  'title:sub_vmfa_auth': 'Auth Virtual MFA Device',
  'title:sub_u2f_auth': 'Auth U2F Security Key',
  'title:sub_default': 'RAM User Safety Verification',
  'message:incorrect_u2f_bind': 'Safety verification failed, please try again.',
  'message:incorrect_u2f_auth': 'Failed to auth the U2F security key, please obtain the U2F security key information again and submit the authing.',
  'message:u2f_get_key_fail': 'Failed to obtain U2F security key. Please try again.',
  'message:u2f_get_key_timeout': 'Obtaining the U2F security key timed out. Please try again.',
  'message:u2f_browser_not_support': 'Your browser does not support the U2F security key, or the version of your browser is outdated.',
  'message:u2f_http_not_support': 'HTTP web pages do not support U2F security keys.',
  'message:u2f_bind_confirm_tip': 'Do You Allow the Browser to View Brand and Type of U2F Security Key?',
  'message:u2f_get_key_cancel': 'The process of obtaining the U2F security key is terminated. Please try again.',
  'message:u2f_bind_get_key': 'Waiting for the U2F security key...',
  'message:u2f_bind_get_key_success': 'The U2F security key is obtained.',
  'message:vmfa_bind_step1': 'The First Step: Scan the code to bind, or manually enter the key.',
  'message:vmfa_bind_step2': 'The Second Step: Fill in two sets of security code.',
  'message:vmfa_input_error_tip': 'Security code must be 6-digit.',
  'message:vmfa_input_empty_tip': 'Security code cannot be empty.',
  'message:mfa_choose_vmfa': 'You must install the MFA application on your mobile phone.',
  'message:mfa_choose_u2f': 'YubiKey or other U2F compliant security keys.',
  'message:mfa_choose_tip': 'Security verification is required when performing sensitive operations. Please bind the MFA device in the following ways.',
  'message:new_main_verify_error': 'Unknown error occurred in the security verification service. Please try again.',
  'message:sub_invalid_unsupported_{method}!html!lines': `Verification method <code>{method}</code> is not supported.
  To protect your account, use your Alibaba Cloud account or the RAM user that has administrative rights to log on to the RAM console and reset the verification method.`
};
