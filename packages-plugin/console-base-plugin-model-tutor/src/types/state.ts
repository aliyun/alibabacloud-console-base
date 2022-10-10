import {
  DataWithLoading
} from '@alicloud/console-base-rc-loading';
import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';

export interface IModelState {
  dwlTutorDetailMapping: Record<string, DataWithLoading<DataTutorDetail>>;
  openKey: string; // TODO 等 legacy 去掉后，记录 productId + tutorId，并在加载失败后可以重试
  step: number;
  feedbackRated: Record<string, boolean>; // 反馈，记录是否已点「是否有用」，非持久化数据，刷新页面后失效
  feedbackCommented: Record<string, boolean>; // 反馈，记录是否已提交评论，非持久化数据，刷新页面后失效
}