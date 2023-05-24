interface ISplittedPhoneNumber {
  areaCode: string;
  phoneNumber: string;
}

// 从 ${areaCode}-${phoneNumber} 格式手机号中，解析出区号以及号码
export default function getSplittedPhoneNumber(originalPhoneNumber: string | number | boolean): ISplittedPhoneNumber {
  // originalPhoneNumber 正常格式为 {areaCode}-{phoneNumber}
  const stringifiedOriginalPhoneNumber = String(originalPhoneNumber);

  // 对非正常格式 originalPhoneNumber 的兼容
  if (stringifiedOriginalPhoneNumber.includes('-')) {
    const [areaCode, phoneNumber] = stringifiedOriginalPhoneNumber.split('-');

    return {
      // 兜底值为 86
      areaCode: areaCode || '86',
      phoneNumber: phoneNumber || ''
    };
  }
  
  return {
    areaCode: '86',
    phoneNumber: stringifiedOriginalPhoneNumber || ''
  };
}