declare type TAnyFunction = (...args: unknown[]) => unknown;
/**
 * 记录 console-base 发出的消息，应用感兴趣主动订阅的，subscribe 或 subscribeOnce
 */
export default function slsSubscribeByApp(type: string, fn: TAnyFunction): void;
export {};
