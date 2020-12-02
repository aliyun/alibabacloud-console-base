interface IGlobalFontFace {
    projectId: string;
    hash: string;
    dataUrl?: string;
}
/**
 * 在 header 上注入 font face 全局样式，并返回 font-family 名字
 * IOS4 not supported
 */
export declare function injectGlobalFontFace({ projectId, hash, dataUrl }: IGlobalFontFace): string;
export declare const base: import("styled-components").FlattenSimpleInterpolation;
export {};
