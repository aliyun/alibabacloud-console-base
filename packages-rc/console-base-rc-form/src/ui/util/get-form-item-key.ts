import {
  FormItemProps
} from '@alicloud/rc-model-form';

export default function getFormItemKey(props: FormItemProps, index: number): string {
  if (props.key) {
    return props.key;
  }
  
  return `${typeof props.label === 'string' ? props.label : 'form-item'}-${index}`;
}
