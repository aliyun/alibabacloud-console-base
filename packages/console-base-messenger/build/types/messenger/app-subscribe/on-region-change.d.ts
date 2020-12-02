import { IPayloadRegionOnChange } from '../../types';
/**
 * 地域切换时的回调
 */
export default function onRegionChange(fn: (payload: IPayloadRegionOnChange) => void): () => void;
