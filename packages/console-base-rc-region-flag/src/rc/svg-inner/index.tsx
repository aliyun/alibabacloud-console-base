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
import Ph from './ph';

interface IProps {
  regionId: string;
}

const REG_CN = /^cn-/i;
const REG_US = /^us-/i;
const REG_RU = /^rus-/i;
const REG_IN = /^in-[a-z-]*/i; // 印度（孟买） e.g. in-mumbai
const REG_AP_SG = /^ap-southeast-1[a-z-]*/i; // 新加坡
const REG_AP_AU = /^ap-southeast-2[a-z-]*/i; // 澳大利亚（悉尼）
const REG_AP_MY = /^ap-southeast-3[a-z-]*/i; // 马来西亚（吉隆坡）
const REG_AP_ID = /^ap-southeast-5[a-z-]*/i; // 印度尼西亚（雅加达）
const REG_AP_PH = /^ap-southeast-6[a-z-]*/i; // 菲律宾
const REG_AP_JP = /^ap-northeast-1[a-z-]*/i; // 日本（东京）
const REG_AP_KR = /^ap-northeast-2[a-z-]*/i; // 韩国（首尔） e.g. ap-northeast-2-pop
const REG_AP_IN = /^ap-south-1[a-z-]*/i; // 印度
const REG_EU_GB = /^eu-west-1[a-z-]*/i; // 英国（伦敦）
const REG_EU_DE = /^eu-central-1[a-z-]*/i; // 德国（法兰克福）
const REG_ME_AE = /^me-east-1[a-z-]*/i; // 阿联酋（迪拜）
const REG_RSA_ZA = /^rsa-north-1[a-z-]*/i; // 南非 e.g. rsa-north-1-pop

/**
 * 根据 regionId 的前缀对国际（地区）的旗帜进行判定
 * 
 * - 可以通过前缀就判定国家和地域：中国、美国、俄罗斯
 * - regionId 组成为 `{大区域}-{方位}-{数字序号}{后缀}`
 *   + 大区域：亚太 ap、eu 欧洲、中东 me 等
 *   + 方位：东西南北八个
 *   + 数字序号
 *   + 后缀
 *     * 可能是字母，没有连接符，如 ap-southeast-6a
 *     * 可能是连字符后一串字符
 */
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
  
  if (REG_AP_SG.test(regionId)) {
    return <Sg />;
  }
  
  if (REG_AP_AU.test(regionId)) {
    return <Au />;
  }
  
  if (REG_AP_MY.test(regionId)) {
    return <My />;
  }
  
  if (REG_AP_ID.test(regionId)) {
    return <Id />;
  }
  
  if (REG_AP_PH.test(regionId)) {
    return <Ph />;
  }
  
  if (REG_AP_JP.test(regionId)) {
    return <Jp />;
  }
  
  if (REG_AP_KR.test(regionId)) {
    return <Kr />;
  }
  
  if (REG_AP_IN.test(regionId) || REG_IN.test(regionId)) {
    return <In />;
  }
  
  if (REG_EU_GB.test(regionId)) {
    return <Gb />;
  }
  
  if (REG_EU_DE.test(regionId)) {
    return <De />;
  }
  
  if (REG_ME_AE.test(regionId)) {
    return <Ae />;
  }
  
  if (REG_RSA_ZA.test(regionId)) {
    return <Za />;
  }
  
  return null;
}
