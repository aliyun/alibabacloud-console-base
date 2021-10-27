import {
  removeSoloHolder
} from '../util';

import {
  removeAll
} from './_items';

export default function clear(): void {
  removeAll();
  removeSoloHolder();
}
