import React from 'react';

// 国家代码与域名缩写 http://www.vuln.cn/webtools/yumingsuoxie/index.html
import Cn from './cn';
import Sg from './sg';
import Au from './au';
import My from './my';
import Id from './id';
import Jp from './jp';
import Gb from './gb';
import Us from './us';
import De from './de';
import In from './in';
import Ae from './ae';
import Kr from './kr';
import Za from './za';
import Ru from './ru';

interface IProps {
  regionId: string;
}

// 可以通过前缀就判定国家和地域：中国、美国、俄罗斯
const REG_CN = /^cn-/i;
const REG_US = /^us-/i;
const REG_RU = /^rus-/i;

export default function SvgInner({
  regionId
}: IProps): JSX.Element | null {
  if (REG_CN.test(regionId)) {
    return <Cn />;
  }
  
  if (REG_US.test(regionId)) {
    return <Us />;
  }
  
  if (REG_RU.test(regionId)) {
    return <Ru />;
  }
  
  if (/ap-southeast-1[-\w]*/.test(regionId)) { // 新加坡
    return <Sg />;
  }
  
  if (/ap-northeast-1[-\w]*/.test(regionId)) { // 日本（东京）
    return <Jp />;
  }
  
  if (/ap-northeast-2[-\w]*/.test(regionId)) { // 韩国（首尔） e.g. ap-northeast-2-pop
    return <Kr />;
  }
  
  if (/ap-southeast-2[-\w]*/.test(regionId)) { // 澳大利亚（悉尼）
    return <Au />;
  }
  
  if (/ap-southeast-3[-\w]*/.test(regionId)) { // 马来西亚（吉隆坡）
    return <My />;
  }
  
  if (/ap-southeast-5[-\w]*/.test(regionId)) { // 印度尼西亚（雅加达）
    return <Id />;
  }
  
  if (/eu-west-1[-\w]*/.test(regionId)) { // 英国（伦敦）
    return <Gb />;
  }
  
  if (/eu-central-1[-\w]*/.test(regionId)) { // 德国（法兰克福）
    return <De />;
  }
  
  if (/ap-south-1[-\w]*/.test(regionId) || /^in-/.test(regionId)) { // 印度（孟买） e.g. in-mumbai
    return <In />;
  }
  
  if (/me-east-1[-\w]*/.test(regionId)) { // 阿联酋（迪拜）
    return <Ae />;
  }
  
  if (/rsa-north-1[-\w]*/.test(regionId)) { // 南非 e.g. rsa-north-1-pop
    return <Za />;
  }
  
  return null;
}
