import {
  IParamsErrorDiagnosisProbe
} from './params';
import {
  IDataErrorDiagnosis,
  IDataErrorDiagnosisSolutionFeedback
} from './data';

/**
 * 预查诊断信息
 */
export interface IApiDataErrorDiagnosisProbe {
  (params: IParamsErrorDiagnosisProbe): Promise<string>;
}

/**
 * 获取诊断信息，根据预查得到的 Key 获取
 */
export interface IApiDataErrorDiagnosis {
  (contentKey: string): Promise<IDataErrorDiagnosis>;
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