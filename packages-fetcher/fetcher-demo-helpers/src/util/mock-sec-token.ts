import {
  IWin
} from '../types';

export default function mockSecToken(): void {
  const win = window as IWin;
  
  if (!win.ALIYUN_CONSOLE_CONFIG) {
    win.ALIYUN_CONSOLE_CONFIG = {};
  }
  
  win.ALIYUN_CONSOLE_CONFIG.SEC_TOKEN = '__mock_sec_token__';
}
