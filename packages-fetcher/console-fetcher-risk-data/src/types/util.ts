/**
 * 这个 Typescript 函数主要用于将接口首字母大写的类型转化为前端使用的首字母小写的类型
 */
export type TUnCapitalizeKeys<T extends object> = {
  [P in keyof T as `${Uncapitalize<string & P>}`]: T[P]
}

export type TOmitConstantPayload<T extends { TicketType: string; }> = Omit<T, 'TicketType' | 'Origin' | 'AccountType'>;