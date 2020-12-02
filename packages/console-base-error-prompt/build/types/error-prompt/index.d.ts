import { TErrorPromptArg, IErrorPromptArgExtra } from '../types';
/**
 * 错误弹窗
 *
 * `o` 可以是：
 *    1. 字符串、JSX 会被当作 message
 *    2. Error 实例，里边可以有 details 对象包含要展示的信息
 *    3. plain object
 * `extra` 用于自定义 title、button
 */
export default function errorPrompt(o?: TErrorPromptArg, extra?: IErrorPromptArgExtra): Promise<void>;
