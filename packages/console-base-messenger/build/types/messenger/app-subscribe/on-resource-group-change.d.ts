import { IPayloadResourceGroup } from '../../types';
/**
 * 资源组切换时的回调
 */
export default function onResourceGroupChange(fn: (payload: IPayloadResourceGroup | null) => void): () => void;
