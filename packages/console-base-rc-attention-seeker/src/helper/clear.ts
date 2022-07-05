import {
  attentionItems,
  removeSoloHolder
} from './util';

export default function clear(): void {
  attentionItems.clear();
  removeSoloHolder();
}
