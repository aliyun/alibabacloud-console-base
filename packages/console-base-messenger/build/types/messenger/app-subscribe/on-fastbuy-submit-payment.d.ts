import { IPayloadFastbuy } from '../../types';
export default function onFastbuySubmitPayment(fn: (payload: IPayloadFastbuy) => void): () => void;
