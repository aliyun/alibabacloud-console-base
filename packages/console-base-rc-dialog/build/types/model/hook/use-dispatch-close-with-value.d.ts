/**
 * 关闭 Dialog，传入的参数 value 和 rejected 在 Dialog 场景下很有用
 *
 * 注意会经常变，因为涉及到 active 和 locked
 */
export default function useDispatchCloseWithValue<T = void>(): (value?: T, rejected?: boolean) => void;
