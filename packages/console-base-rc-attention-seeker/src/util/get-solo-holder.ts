import {
  HOLDER_ID
} from '../const';

export default function getSoloHolder(): HTMLElement {
  let holder = document.getElementById(HOLDER_ID);
  
  if (!holder) {
    holder = document.createElement('div');
    
    holder.id = HOLDER_ID;
    
    document.body.appendChild(holder);
  }
  
  return holder;
}
