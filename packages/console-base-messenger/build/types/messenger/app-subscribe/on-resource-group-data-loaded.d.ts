import { IPayloadResourceGroup } from '../../types';
/**
 * 资源组数据加载完成时的回调
 */
export default function onResourceGroupDataLoaded(fn: (payload: IPayloadResourceGroup[]) => void): () => void;
