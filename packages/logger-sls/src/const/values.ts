/**
 * 合并日志的最外层的 topic
 */
export const TOPIC_MERGED = '@alicloud/logger-sls/merged';
/**
 * 定死的 API 版本，GET 的时候为参数 `APIVersion`，POST 的时候为 header `x-log-apiversion`
 */
export const API_VERSION = '0.6.0';
/**
 * 日志管道在最初的 10s 钟内处于「封锁」状态，这是为了给应用的请求让行
 */
export const PIPE_FROZEN_TIME = 10000;
/**
 * 日志管道 put 到发送的等待时间，这段时间内，如果有新的日志进来，会被合并并重新计时
 */
export const PIPE_WAIT_TIME = 200;
/**
 * 日志管道的队列最大元素个数，超过它直接发送
 */
export const PIPE_MAX_QUEUE = 64;
