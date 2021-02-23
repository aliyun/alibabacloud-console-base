import _forEach from 'lodash/forEach';

import {
  FetcherFnOpenApi,
  // FetcherFnInnerApi,
  // FetcherFnContainerApi,
  FetcherFnOpenApiMulti
} from '@alicloud/console-fetcher-basic';

// import {
//   IFnOneApi,
//   IFnOneApiMulti,
//   IOneApiMultiAction,
//   IOpenApiMultiResult
// } from '../types';
// import FetchBizError from '../error/biz';
//
// import stringifyStable from './_stringify';

interface IAutoMultiItem {
  action: string;
  params?: any;
  resolves: Function[];
  rejects: Function[];
}

function composeHash(action: string, params?: any): string {
  let paramsString: string = params ? stringifyStable(params) : '';
  
  if (paramsString === '{}') { // 传入空对象跟不传等价
    paramsString = '';
  }
  
  return paramsString ? `${action}?${paramsString}` : action;
}

/**
 * OpenAPI 合并器
 */
export default class AutoMulti {
  _queueMapping: {
    [hash: string]: IAutoMultiItem;
  };
  
  _product: string;
  
  _openApi: IFnOneApi;
  
  _openApiMulti: IFnOneApiMulti;
  
  _timer: number | null = null;
  
  /**
   * 一个 product 一个 merger 对象，因为合并只能以 product 为第一维度。
   * 
   * @param product
   * @param openApi 执行原生的 OpenAPI 的方法
   * @param openApiMulti 执行原生的并发 OpenAPI 的方法
   */
  constructor(product: string, openApi: IFnOneApi, openApiMulti: IFnOneApiMulti) {
    this._product = product;
    this._openApi = openApi;
    this._openApiMulti = openApiMulti;
    this._queueMapping = {};
  }
  
  /**
   * 使用者需要知道一份 merger 对象的引用，然后 `push(action, params)`，并获得到一个 Promise 对象，该 Promise 对象会在
   * 真正执行请求后 resolve 或 reject。
   */
  push<T = void, P = void>(action: string, params?: P): Promise<T> {
    const mappingItem: IAutoMultiItem = this._getMappingItem(action, params);
    const promise = new Promise<T>((resolve, reject) => {
      mappingItem.resolves.push(resolve);
      mappingItem.rejects.push(reject);
    });
    
    if (!this._timer) {
      this._timer = window.setTimeout(() => this._call(), 16);
    }
    
    return promise;
  }
  
  /**
   * 获得
   */
  _getMappingItem<P>(action: string, params?: P): IAutoMultiItem {
    // 通过 action 和 params 生成 hash
    const hash = composeHash(action, params);
    const mappingItem = this._queueMapping[hash];
    
    if (mappingItem) {
      return mappingItem;
    }
    
    const newMappingItems: IAutoMultiItem = {
      action,
      params,
      resolves: [],
      rejects: []
    };
    
    this._queueMapping[hash] = newMappingItems;
    
    return newMappingItems;
  }
  
  _call(): void {
    const queueMapping = this._queueMapping;
    
    // 清空 timer 和 queueMapping，这样不会对后续的 push 造成影响
    this._timer = null;
    this._queueMapping = {};
    
    const actions: IOneApiMultiAction[] = [];
    const resolvesArr: Function[][] = [];
    const rejectsArr: Function[][] = [];
    
    _forEach(queueMapping, ({
      action,
      params,
      resolves,
      rejects
    }) => {
      actions.push({ // 不要加 customRequestKey，这样返回
        action,
        params
      });
      
      resolvesArr.push(resolves);
      rejectsArr.push(rejects);
    });
    
    if (actions.length <= 0) { // 不可能，但为了代码的严谨
      return;
    }
    
    function resolveIt(value: any, index: number): void {
      const resolves = resolvesArr[index];
      
      if (resolves) {
        resolves.forEach(resolve => resolve(value));
      }
    }
    
    function rejectIt(err: Error, index?: number): void {
      if (index >= 0) {
        const rejects = rejectsArr[index];
        
        if (rejects) {
          rejects.forEach(reject => reject(err));
        }
        
        return;
      }
      
      rejectsArr.forEach(v => v.forEach(reject => reject(err))); // 全部 reject
    }
    
    // 还是单个的请求
    if (actions.length === 1) {
      this._openApi(this._product, actions[0].action, actions[0].params).then(result => {
        resolveIt(result, 0);
      }, (err: Error) => {
        rejectsArr[0].forEach(reject => reject(err));
      });
      
      return;
    }
    
    // 执行合并请求
    this._openApiMulti(this._product, actions).then((o: IOpenApiMultiResult) => {
      _forEach(o, (v: any, k) => {
        const i = Number(k);
        
        // 接口报错，返回结果为 { Code: string; Message: string; RequestId: string; }
        if (v.Code) { // 唉，very 狗屎接口设计...
          rejectIt(new FetchBizError(v.Message, {
            url: '(merged multi api)',
            options: {
              title: 'POST',
              body: { // 努力还原一下出错的 body（中的重要部分）
                action: actions[i].action,
                params: actions[i].params
              }
            },
            responseJson: v
          }, v.Code), i); // TODO Code + Message 解析
        } else {
          resolveIt(v, i);
        }
      });
    }, (err: Error) => rejectIt(err));
  }
}
