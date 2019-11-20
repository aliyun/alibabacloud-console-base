function getCollina() {
  let UA_Opt = window.UA_Opt

  // Fallback
  if(!UA_Opt){
    UA_Opt = {}
    UA_Opt.SendMethod = 8
    UA_Opt.LogVal = 'aliyunbuy_uadata'
    window[UA_Opt.LogVal] = ''
    UA_Opt.Token = new Date().getTime() + ':' + Math.random()
    UA_Opt.MaxMCLog = 10
    UA_Opt.MaxKSLog = 20
    UA_Opt.MaxMPLog = 5
    UA_Opt.MPInterval = 50
    UA_Opt.MaxTCLog = 50
    UA_Opt.MaxFocusLog = 5
    UA_Opt.isSendError = 1
    UA_Opt.Flag = 97422
  }

  let tmp_ua = UA_Opt.LogVal
  UA_Opt.Token = new Date().getTime() + ':' + Math.random()
  UA_Opt.reload && UA_Opt.reload()

  return tmp_ua
}

export default getCollina
