import _clone from 'lodash/clone';
import _isEmpty from 'lodash/isEmpty';
import _forEach from 'lodash/forEach';

import {
  createError
} from '@alicloud/fetcher';
import {
  ERROR_BIZ
} from '@alicloud/console-fetcher-interceptor-res-biz';
import stringifyOrdered from '@alicloud/json-stringify-ordered';

import {
  IFnConsoleApi,
  IFnConsoleApiMulti,
  IConsoleApiMultiAction,
  TConsoleApiMultiResult
} from '../types';
import {
  AUTO_MULTI_DELAY
} from '../const';

import getAutoMultiError from './get-auto-multi-error';

interface IFnResolve {
  (value: unknown): void;
}

interface IFnReject {
  (err: Error): void;
}

/**
 * 相同的 action + params 组合暂存对象
 */
interface IAutoMultiItem {
  action: string;
  params?: unknown;
  resolves: IFnResolve[];
  rejects: IFnReject[];
}

function composeHash(action: string, params?: unknown): string {
  if (_isEmpty(params)) {
    return action;
  }
  
  return `${action}?${typeof params === 'string' ? params : stringifyOrdered(params)}`;
}

/**
 * OpenAPI 合并器，product + region 共用一个
 */
export default class AutoMultiQueue {
  private _product: string;
  private _region: string | undefined;
  private _api: IFnConsoleApi;
  private _apiMulti: IFnConsoleApiMulti;
  /**
   * 暂存器
   */
  private _tempStorage: Record<string, IAutoMultiItem>;
  private _timer: number | null = null;
  
  private _handleCall = (): void => this._call();
  
  /**
   * 一个 product + region 对象，因为合并只能以 product 为第一维度。
   */
  constructor(product: string, region: string | undefined, api: IFnConsoleApi, apiMulti: IFnConsoleApiMulti) {
    this._product = product;
    this._region = region;
    this._api = api;
    this._apiMulti = apiMulti;
    this._tempStorage = {};
  }
  
  /**
   * 使用者需要知道对象的引用，然后 `push(action, params)`，并获得到一个 Promise 对象，该 Promise 对象会在
   * 真正执行请求后 resolve 或 reject。
   */
  push<T = void>(action: string, params?: unknown): Promise<T> {
    const {
      resolves,
      rejects
    } = this._getAutoMultiItem(action, params);
    const promise = new Promise<T>((resolve, reject) => {
      resolves.push(resolve);
      rejects.push(reject);
    });
    
    if (!this._timer) {
      this._timer = window.setTimeout(this._handleCall, AUTO_MULTI_DELAY);
    }
    
    return promise;
  }
  
  /**
   * 获得跟 action 和 params 对应的临时对象，保证多个相同的请求最终只会有一个被并入请求（但结果返回后会拿到相同结果的 clone）
   */
  _getAutoMultiItem(action: string, params?: unknown): IAutoMultiItem {
    // 通过 action 和 params 生成 hash，将作为返回值的 key
    const hash = composeHash(action, params);
    const multiItem = this._tempStorage[hash];
    
    if (multiItem) {
      return multiItem;
    }
    
    const o: IAutoMultiItem = {
      action,
      params,
      resolves: [],
      rejects: []
    };
    
    this._tempStorage[hash] = o;
    
    return o;
  }
  
  /**
   * 正式请求之前，把 queueMapping 转成后续可以安全方便处理的数据，并重置相关的数据
   */
  _prepareForCall(): [IConsoleApiMultiAction[], (value: unknown, index: number) => void, (err: Error, index?: number) => void] {
    const queueMapping = this._tempStorage;
    
    // 清空 timer 和 queueMapping，这样不会对后续的 push 造成影响
    this._timer = null;
    this._tempStorage = {};
    
    const actions: IConsoleApiMultiAction[] = [];
    const resolvesArr: IFnResolve[][] = [];
    const rejectsArr: IFnReject[][] = [];
    
    _forEach(queueMapping, ({
      action,
      params,
      resolves,
      rejects
    }) => {
      /**
       * 不要用 customRequestKey，这样会以数字为 key 返回数据，好处:
       * 
       * 1. 数据相对小
       * 2. 可以用数字为索引快速找到 actions 中对应的
       */
      actions.push({
        action,
        params
      });
      
      resolvesArr.push(resolves);
      rejectsArr.push(rejects);
    });
    
    function resolveAll(value: unknown, index: number): void {
      const resolves = resolvesArr[index];
      
      if (resolves) {
        resolves.forEach(resolve => resolve(_clone(value)));
      }
    }
    
    function rejectAll(err: Error, index?: number): void {
      if (index >= 0) { // 传入 index
        const rejects = rejectsArr[index];
        
        if (rejects) {
          rejects.forEach(reject => reject(err));
        }
        
        return;
      }
      
      // 无 index，表示整个 multi 请求都失败了（OneConsole 底层失败）
      rejectsArr.forEach(v => v.forEach(reject => reject(err)));
    }
    
    return [actions, resolveAll, rejectAll];
  }
  
  _call(): void {
    const [actions, resolveAll, rejectAll] = this._prepareForCall();
    
    if (actions.length <= 0) { // 不可能，但为了代码的严谨
      return;
    }
    
    const {
      _product: product,
      _region: region
    } = this;
    const options = region ? { // 嗯 不要忘了 region
      region
    } : undefined;
    
    // 还是单个的请求，调用独立 api
    if (actions.length === 1) {
      this._api(product, actions[0].action, actions[0].params, options).then(result => {
        resolveAll(result, 0);
      }, (err: Error) => {
        rejectAll(err, 0);
      });
      
      return;
    }
    
    // 执行合并请求
    this._apiMulti(product, actions, options).then((o: TConsoleApiMultiResult) => {
      // 返回的数据是一个混合着成功与失败的数据集合，进行遍历，把它对应到原初的单个调用的 Promise 上
      _forEach(o, (v: any, k) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        const errInMulti = getAutoMultiError(v);
        const i = Number(k);
        
        if (errInMulti) {
          rejectAll(createError({
            url: '(auto multi api)',
            options: {
              method: 'POST',
              body: { // 努力还原一下出错的 body（中的重要部分）
                action: actions[i].action,
                params: actions[i].params,
                region
              }
            },
            responseJson: errInMulti
          }, ERROR_BIZ, errInMulti.Message, errInMulti.Code), i);
        } else {
          resolveAll(v, i);
        }
      });
    }, rejectAll);
  }
}
