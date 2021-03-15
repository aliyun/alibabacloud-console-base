import removeSoloHolder from '../util/remove-solo-holder';

import {
  removeAll
} from './_items';

export default function clear(): void {
  removeAll();
  removeSoloHolder();
}
