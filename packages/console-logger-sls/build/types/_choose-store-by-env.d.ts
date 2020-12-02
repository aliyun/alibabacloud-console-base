interface IOtherStores {
    dev?: string;
    daily?: string;
    pre?: string;
}
/**
 * 根据当前的判定环境选择不同的 store，提供给外部使用的工具方法
 */
export default function chooseStoreByEnv(logstore: string, otherStores: IOtherStores): string;
export {};
