import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';
import {
  DataWithLoading
} from '@alicloud/console-base-rc-loading';

import useOpenKey from './use-open-key';
import useGetDwlTutorDetail from './use-get-dwl-tutor-detail';

export default function useCurrentDwl(): DataWithLoading<DataTutorDetail | null> | undefined {
  const getDwlTutorDetail = useGetDwlTutorDetail();
  const openKey = useOpenKey();
  
  return getDwlTutorDetail(openKey);
}
