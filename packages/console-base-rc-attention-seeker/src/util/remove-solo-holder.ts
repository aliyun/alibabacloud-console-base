import {
  unmountComponentAtNode
} from 'react-dom';

import {
  HOLDER_ID
} from '../const';

export default function removeSoloHolder(): void {
  let holder = document.getElementById(HOLDER_ID);
  
  if (holder) {
    unmountComponentAtNode(holder);
    holder.parentNode?.removeChild(holder);
    holder = null;
  }
}
