import {
  IParamsErrorDiagnose
} from './params';
import {
  IDataErrorDiagnose,
  IDataErrorDiagnoseAnswerFeedback
} from './data';

/**
 * 获取诊断信息
 */
export interface IApiDataErrorDiagnose {
  (params: IParamsErrorDiagnose): Promise<IDataErrorDiagnose>;
}

/**
 * 获取诊断信息中方案的反馈结果
 */
export interface IApiDataErrorDiagnoseAnswerFeedback {
  (answerId: string): Promise<IDataErrorDiagnoseAnswerFeedback>;
}

/**
 * 对诊断信息中方案的进行「赞」操作
 */
export interface IApiDataErrorDiagnoseAnswerFeedbackLike {
  (answerId: string): Promise<IDataErrorDiagnoseAnswerFeedback>;
}

/**
 * 对诊断信息中方案的进行「赞」取消操作
 */
export interface IApiDataErrorDiagnoseAnswerFeedbackLikeCancel {
  (answerId: string): Promise<IDataErrorDiagnoseAnswerFeedback>;
}

/**
 * 对诊断信息中方案的进行「踩」操作
 */
export interface IApiDataErrorDiagnoseAnswerFeedbackDislike {
  (answerId: string, remark: string): Promise<IDataErrorDiagnoseAnswerFeedback>;
}

/**
 * 对诊断信息中方案的进行「踩」取消操作
 */
export interface IApiDataErrorDiagnoseAnswerFeedbackDisikeCancel {
  (answerId: string): Promise<IDataErrorDiagnoseAnswerFeedback>;
}