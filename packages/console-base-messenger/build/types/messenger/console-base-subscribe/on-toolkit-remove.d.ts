/**
 * console-base 响应动态移除某工具
 *
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeRemoveTool
 */
export default function onToolkitRemove(fn: (id: string) => void): () => void;
