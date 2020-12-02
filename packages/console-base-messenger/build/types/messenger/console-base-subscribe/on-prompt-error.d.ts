/**
 * console-base 响应错误弹窗
 */
export default function onPromptError<T>(fn: (payload: T) => Promise<void>): () => void;
