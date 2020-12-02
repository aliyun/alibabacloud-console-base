/**
 * 某工具的「激活」时的回调
 *
 * 原 @ali/console-base-sdk-toolkit messenger.subscribeActivated + subscribeDeactivated
 */
export default function onToolkitItemActiveChange(id: string, fn: (active: boolean) => void): () => void;
