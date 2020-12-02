/**
 * console-base 通知应用刷新地域的资源数，具体的逻辑需要控制台来实现
 */
export default function onRegionRefreshResourceCount(fn: (payload: string[]) => Promise<Record<string, number>>): () => void;
