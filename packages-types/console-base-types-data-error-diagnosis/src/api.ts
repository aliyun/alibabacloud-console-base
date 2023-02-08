import {
  IParamsErrorDiagnosis
} from './params';
import {
  IDataErrorDiagnosis,
  IDataErrorDiagnosisSolutionFeedback
} from './data';

/**
 * 获取诊断信息
 */
export interface IApiDataErrorDiagnosis {
  (params: IParamsErrorDiagnosis): Promise<IDataErrorDiagnosis>;
}

/**
 * 获取诊断信息中方案的反馈结果
 */
export interface IApiDataErrorDiagnosisSolutionFeedback {
  (solutionId: string): Promise<IDataErrorDiagnosisSolutionFeedback>;
}

/**
 * 对诊断信息中方案的进行「赞」操作
 */
export interface IApiDataErrorDiagnosisSolutionFeedbackLike {
  (solutionId: string, requestId: string): Promise<IDataErrorDiagnosisSolutionFeedback>;
}

/**
 * 对诊断信息中方案的进行「赞」取消操作
 */
export interface IApiDataErrorDiagnosisSolutionFeedbackLikeCancel {
  (solutionId: string, requestId: string): Promise<IDataErrorDiagnosisSolutionFeedback>;
}

/**
 * 对诊断信息中方案的进行「踩」操作
 */
export interface IApiDataErrorDiagnosisSolutionFeedbackDislike {
  (solutionId: string, requestId: string, remark: string): Promise<IDataErrorDiagnosisSolutionFeedback>;
}

/**
 * 对诊断信息中方案的进行「踩」取消操作
 */
export interface IApiDataErrorDiagnosisSolutionFeedbackDislikeCancel {
  (solutionId: string, requestId: string): Promise<IDataErrorDiagnosisSolutionFeedback>;
}