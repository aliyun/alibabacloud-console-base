import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';

import {
  URL_PARAM_TUTOR,
  URL_PARAM_TUTOR_PRE
} from '../const';
import {
  composeTutorParam
} from '../util';

interface ITutorFollowParams {
  [URL_PARAM_TUTOR]: string;
  [URL_PARAM_TUTOR_PRE]: '' | null;
}

export default function composeTutorFollowParams(tutorDetail: DataTutorDetail, step: number): ITutorFollowParams | undefined {
  if (!tutorDetail.productId && !tutorDetail.tutorId) { // TODO 因为 legacy 的关系... 如果没有 legacy 这种通过 registry 的方式的，这个判断可杀
    return;
  }
  
  return {
    [URL_PARAM_TUTOR]: composeTutorParam(tutorDetail.productId, tutorDetail.tutorId, step),
    [URL_PARAM_TUTOR_PRE]: tutorDetail.pre ? '' : null
  };
}