import {
  IModelState
} from '../types';

export const DEFAULT_CONTEXT_STATE: IModelState = {
  dwlTutorDetailMapping: {},
  openKey: '',
  step: 1,
  feedbackRated: {},
  feedbackCommented: {}
};

/**
 * 供外部使用的 data 属性 key
 */
export const DATA_KEY_TUTOR_OPEN = 'data-console-base-tutor-open';
export const DATA_KEY_TUTOR_CLOSE = 'data-console-base-tutor-close';

export const URL_PARAM_TUTOR = 'console_base_tutor';
export const URL_PARAM_TUTOR_PRE = '_console_base_tutor_pre_';

// 是否使用预发 CDN 获取数据（仅供测试使用）
export const PRE = ((): boolean => {
  try {
    const {
      searchParams
    } = new URL(location.href);
    
    return searchParams.has(URL_PARAM_TUTOR_PRE);
  } catch (err) {
    // ignore
  }
  
  return false;
})();

export const SLS_TOPIC_PREFIX = 'console_base_tutor/';