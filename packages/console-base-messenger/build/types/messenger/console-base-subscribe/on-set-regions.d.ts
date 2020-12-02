import { IPayloadRegion } from '../../types';
/**
 * console-base 响应设置地域列表
 */
export default function onSetRegions(fn: (payload?: IPayloadRegion[]) => void): () => void;
