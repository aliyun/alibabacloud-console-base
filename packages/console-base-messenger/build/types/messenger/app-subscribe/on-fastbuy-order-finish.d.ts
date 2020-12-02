import { IPayloadFastbuy } from '../../types';
export default function onFastbuyOrderFinish(fn: (payload: IPayloadFastbuy) => void): () => void;
