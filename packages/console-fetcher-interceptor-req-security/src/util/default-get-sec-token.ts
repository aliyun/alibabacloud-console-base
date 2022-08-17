import {
  IWindow
} from '../types';

/**
 * 获取 SecToken 参数，OneConsole 通用，非 OneConsole 需要额外方式获取（可以添加额外的 interceptor）
 * 不要用封装后的 OneConsole Config，那样对测试不好（也没有必要多一层依赖）
 */
export default function defaultGetSecToken(): string | undefined {
  return (window as unknown as IWindow).ALIYUN_CONSOLE_CONFIG?.SEC_TOKEN;
}
