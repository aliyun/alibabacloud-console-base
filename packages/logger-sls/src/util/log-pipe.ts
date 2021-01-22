import {
  ILogInfo
} from '../types';
import {
  API_VERSION,
  PIPE_FROZEN_TIME,
  PIPE_WAIT_TIME,
  PIPE_MAX_QUEUE
} from '../const';

import sendLogs from './send-logs';

/**
 * 日志管道，用于在一定的时间内积压日志
 */
class LogPipe {
  private readonly trackUrl: string;
  private readonly apiVersion: string;
  private queue: ILogInfo[];
  private timer: number;
  private frozen: boolean;
  
  constructor(project: string, endpoint: string, logstore: string, apiVersion = API_VERSION) {
    this.trackUrl = `//${project}.${endpoint}/logstores/${logstore}/track`;
    this.apiVersion = apiVersion;
    this.queue = [];
    this.frozen = true;
    
    setTimeout(() => {
      this.frozen = false;
      this.signalSend();
    }, PIPE_FROZEN_TIME);
  }
  
  /**
   * 把队列中的日志全部发送并重置队列
   */
  private clearQueue = (): void => { // 必须是箭头函数，可以脱离 this
    this.clearTimer();
    sendLogs(this.trackUrl, this.apiVersion, this.queue);
    this.queue = [];
  };
  
  /**
   * 将日志推入队列，并通知发送
   */
  put = (topic: string, info?: Record<string, unknown>, instant?: boolean): void => { // 必须是箭头函数，可以脱离 this
    const logInfo: ILogInfo = {
      ...info,
      __topic__: topic
    };
    
    if (instant) { // 即时发送
      sendLogs(this.trackUrl, this.apiVersion, [logInfo]);
      
      return;
    }
    
    this.queue.push(logInfo);
    this.signalSend();
  };
  
  private signalSend(): void {
    if (!this.queue.length || this.frozen) {
      return;
    }
    
    if (this.queue.length >= PIPE_MAX_QUEUE) { // 积压的日志不要太多
      this.clearQueue();
    } else {
      this.resetTimer();
    }
  }
  
  private clearTimer(): void {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = 0;
    }
  }
  
  private resetTimer(): void {
    this.clearTimer();
    this.timer = window.setTimeout(this.clearQueue, PIPE_WAIT_TIME);
  }
}

/**
 * 创建一个日志管道，返回它的 put 方法（上下文无关，脱离 this 直接使用）
 */
export default function logPipe(project: string, endpoint: string, logstore: string, apiVersion?: string): (topic: string, info?: Record<string, unknown>, instant?: boolean) => void {
  const pipe = new LogPipe(project, endpoint, logstore, apiVersion);
  
  return pipe.put;
}
