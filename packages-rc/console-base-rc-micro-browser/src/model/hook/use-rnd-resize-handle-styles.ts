import {
  HandleStyles
} from 'react-rnd';

import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';

const resizeHandleStyleHidden = {
  display: 'none'
};

const onlyLeft: HandleStyles = {
  bottom: resizeHandleStyleHidden,
  bottomLeft: resizeHandleStyleHidden,
  bottomRight: resizeHandleStyleHidden,
  right: resizeHandleStyleHidden,
  top: resizeHandleStyleHidden,
  topLeft: resizeHandleStyleHidden,
  topRight: resizeHandleStyleHidden
};

export default function useRndResizeHandleStyles(): HandleStyles | undefined {
  if (useMode() === EMicroBrowserMode.PINNED) {
    return onlyLeft;
  }
}
