import { IPayloadRegionGroup } from '../../types';
/**
 * console-base 响应设置地域分组列表
 */
export default function onSetRegionGroups(fn: (payload?: IPayloadRegionGroup[]) => void): () => void;
