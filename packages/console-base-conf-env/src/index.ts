import parseEnv from '@alicloud/console-base-conf-parse-env';

export default parseEnv();

// 这里用 export * from 可能会导致问题... 「modules[moduleId] is undefined」所以改成主动输出
export type {
  ConsoleBaseConfEnv
} from '@alicloud/console-base-conf-parse-env';
