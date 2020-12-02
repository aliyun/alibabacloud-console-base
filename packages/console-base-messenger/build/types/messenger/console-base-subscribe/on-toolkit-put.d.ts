import { SettingsToolkitItem } from '@alicloud/console-base-common-typings';
/**
 * console-base 响应动态添加或修改某工具
 *
 * 原 @ali/console-base-sdk-toolkit messenger.subscribePutTool
 */
export default function onToolkitPut(fn: (tool: SettingsToolkitItem) => void): () => void;
