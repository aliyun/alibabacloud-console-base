import UA, {
  BrowserType
} from '@alicloud/ua';

import intl from '../../intl';

interface IU2FStateMessage {
  noPopUp: boolean;
  u2fNotSupportedMsg: string;
}

function getU2FStateMessage(): IU2FStateMessage {
  const noPopUp = (UA.BROWSER === BrowserType.CHROME || UA.BROWSER === BrowserType.EDGE);
  let u2fNotSupportedMsg = intl('message:u2f_browser_not_support');

  if (location.protocol === 'http:') {
    u2fNotSupportedMsg = intl('message:u2f_http_not_support');
  }

  return {
    noPopUp,
    u2fNotSupportedMsg
  };
}

const u2fStateMessage = getU2FStateMessage();

export default u2fStateMessage;