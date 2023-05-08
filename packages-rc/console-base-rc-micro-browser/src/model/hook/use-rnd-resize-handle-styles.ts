import {
  HandleStyles
} from 'react-rnd';

import usePinned from './use-pinned';

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
  if (usePinned()) {
    return onlyLeft;
  }
}
