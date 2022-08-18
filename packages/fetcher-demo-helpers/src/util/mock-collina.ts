import {
  IWin
} from '../types';

import injectScript from './inject-script';

export default function mockCollina(): void {
  const win = window as IWin;
  
  if (!win.UA_Opt) {
    const LOG_VAL = 'collina_by_boshit';
    
    win.UA_Opt = {
      LogVal: LOG_VAL,
      Token: `${Date.now()}:${Math.random()}`,
      MaxMCLog: 10,
      MaxKSLog: 20,
      MaxMPLog: 5,
      MPInterval: 50,
      MaxTCLog: 50,
      MaxFocusLog: 5,
      SendMethod: 8,
      Flag: 97422,
      isSendError: 1
    };
    
    win[LOG_VAL] = '';
  }
  
  injectScript('//acjs.aliyun.com/js/uab.js');
}