import { IPayloadResourceGroup } from '../../types';
/**
 * 通知控制台应用：用户选择新的资源组（null 表示「全部资源组」）
 *
 * FIXME 构建后会丢失 null..
 */
export default function resourceGroupChange(payload?: null | IPayloadResourceGroup): void;
