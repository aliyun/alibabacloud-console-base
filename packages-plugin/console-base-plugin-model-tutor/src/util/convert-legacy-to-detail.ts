import {
  DataTutorDetail
} from '@alicloud/console-base-types-data-tutor';
import {
  MessengerPayloadTutorRegister
} from '@alicloud/console-base-messenger-tutor';

export default function convertLegacyToDetail(legacy: MessengerPayloadTutorRegister): DataTutorDetail {
  return {
    productId: '',
    tutorId: '',
    pre: false,
    name: legacy.title || '',
    brief: '',
    steps: legacy.contents.map(v => ({
      title: '',
      content: v
    }))
  };
}