import { IPayloadFastbuy } from '../../types';
export default function onFastbuyBuy(fn: (payload: IPayloadFastbuy) => void): () => void;
