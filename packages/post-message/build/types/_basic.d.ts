declare type TAnyCallback = (...args: unknown[]) => void;
/**
 * 反注册对 type 的某一回调，一般推荐用 subscribe 的返回
 */
export declare function unsubscribe(type: string, fn: TAnyCallback): void;
/**
 * 注册回调，返回可用于反注册的方法
 */
export declare function subscribe<P = void>(type: string, fn: (payload?: P) => void): () => void;
/**
 * 反注册对 type 的某一单次回调（有必要的场景）
 */
export declare function unsubscribeOnce(type: string, fn: TAnyCallback): void;
/**
 * 注册单次回调，运行一次后将自动移除
 */
export declare function subscribeOnce<P = void>(type: string, fn: (payload?: P) => void): () => void;
/**
 * 广播消息，当传入的对象 payload 不是 plain 对象的时候（如 Error、function、DOMElement、JSX 等），这里会报错
 * 「Uncaught DOMException: The object could not be cloned.」或 「DataCloneError: The object could not be cloned.」
 * 这个错误不能吃掉，因为使用者需要同步地知道调用失败了
 */
export declare function broadcast<P = void>(type: string, payload?: P, targetOrigin?: string): void;
/**
 * 去父窗口进行广播
 */
export declare function broadcastInParent<P = void>(type: string, payload?: P, targetOrigin?: string): void;
export {};
