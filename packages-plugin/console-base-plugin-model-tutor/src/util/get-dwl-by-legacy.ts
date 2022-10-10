import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';
import {
  MessengerPayloadTutorRegister
} from '@alicloud/console-base-messenger-tutor';
import {
  DataWithLoading,
  LoadingStatus,
  createDataWithLoading
} from '@alicloud/console-base-rc-loading';

import convertLegacyToDetail from './convert-legacy-to-detail';

export default function getDwlFromLegacy(legacy?: MessengerPayloadTutorRegister): DataWithLoading<DataTutorDetail> | undefined {
  if (!legacy) {
    return;
  }
  
  return createDataWithLoading<DataTutorDetail>(convertLegacyToDetail(legacy), LoadingStatus.SUCCESS);
}