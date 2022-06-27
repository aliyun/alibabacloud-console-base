import React, {
  useEffect
} from 'react';

import {
  H2,
  List
} from '@alicloud/demo-rc-elements';

import injectScript from '../../util/inject-script';

interface IUaOpt {
  LogVal: string;
  Token: string;
  MaxMCLog: number;
  MaxKSLog: number;
  MaxMPLog: number;
  MPInterval: number;
  MaxTCLog: number;
  MaxFocusLog: number;
  SendMethod: number;
  isSendError: number;
  Flag: number;
}

interface IWin {
  UA_Opt?: IUaOpt;
  ALIYUN_CONSOLE_CONFIG?: {
    SEC_TOKEN?: string;
  };
  collina_by_boshit?: string;
}

/**
 * 模拟安全参数所需的全局依赖
 */
export default function FetcherDemoRcMockSecurity(): JSX.Element {
  useEffect(() => {
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
  }, []);
  
  useEffect(() => {
    const win = window as IWin;
    
    if (!win.ALIYUN_CONSOLE_CONFIG) {
      win.ALIYUN_CONSOLE_CONFIG = {};
    }
    
    win.ALIYUN_CONSOLE_CONFIG.SEC_TOKEN = '__mock_sec_token__';
  }, []);
  
  useEffect(() => injectScript('//g.alicdn.com/security/umscript/3.3.35/um.js'), []); // 2.1.4
  
  return <>
    <H2>安全参数 Mocking</H2>
    <List>
      <><strong>collina</strong> 脚本 <code>uab.js</code> 已注入</>
      <><strong>sec_token</strong> 已用 OneConsole 标准模式注入</>
      <><strong>umid</strong> 脚本 <code>um.js</code> 已注入</>
    </List>
  </>;
}
