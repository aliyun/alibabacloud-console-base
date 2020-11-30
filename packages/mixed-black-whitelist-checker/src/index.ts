/**
 * 将黑白混合名单转化成「黑」和「白」两个数组
 */
function separateIntoBlackAndWhite(mixedList: string[]): [string[], string[]] {
  const blackList: string[] = [];
  const whiteList: string[] = [];
  
  // 将黑白混合名单转化成「黑」和「白」两个数组
  mixedList.filter(v => !!v).forEach(v => {
    const cleanV = v.trim();
    
    if (/^!/.test(cleanV)) {
      blackList.push(cleanV.substring(1).trim());
    } else {
      whiteList.push(cleanV);
    }
  });
  
  return [blackList, whiteList];
}

function checkValueAgainstConf(value: string, valueInConf: string): boolean {
  // 允许 wildcard * 匹配
  if (/\*$/.test(valueInConf)) { // 仅支持末尾？TODO
    return value.indexOf(valueInConf.substring(0, valueInConf.length - 1)) === 0;
  }
  
  return value === valueInConf;
}

/**
 * 检查 value 是否在 list 中
 */
function checkValueInList(value: string, list: string[]): boolean {
  return list.some(v => checkValueAgainstConf(value, v));
}

/**
 * 检查是否在名单中（不论黑白），名单配置为字符串数组，可以通过通配符最末加一个星号「*」来命中一组名单，
 * 如 `cn-*` 可以匹配 `cn-hz`、`cn-sh`、`cn-bj` 等等
 * 
 * 1. 如果没有黑白名单，则返回 true
 * 2. 如果命中黑名单，则返回 false
 * 3. 如果没有白名单，返回 true，否则返回是否命中
 */
export default function mixedBlackAndWhitelistChecker(value: string, mixedList: string[]): boolean {
  if (!mixedList?.length) {
    return true;
  }
  
  const [blackList, whiteList] = separateIntoBlackAndWhite(mixedList);
  
  // 黑名单的优先级大于白名单，如果有任何一个不通过，不通过
  if (checkValueInList(value, blackList)) {
    return false;
  }
  
  // 没有白名单、或匹配任何一个普通名单，通过
  return whiteList.length ? checkValueInList(value, whiteList) : true;
}
