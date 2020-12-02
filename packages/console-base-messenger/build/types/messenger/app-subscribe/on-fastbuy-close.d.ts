import { IPayloadFastbuy } from '../../types';
export default function onFastbuyClose(fn: (payload: IPayloadFastbuy) => void): () => void;
