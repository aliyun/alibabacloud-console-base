import {
  useEffectPushBody,
  useEffectObserveDocumentResize
} from '../../model';

export default function Lifecycle(): null {
  useEffectPushBody();
  useEffectObserveDocumentResize();
  
  return null;
}