/**
 * 配置项中需要按当前语言进行国际化的数据，避免应用需要自己根据语言进行判断，利用 getIntlString 进行最终输出
 */
export type TSettingsIntlString = string | Record<string, string>; // 可以静态化多语言的「名称」属性类型
