import {
  HandleStyles
} from 'react-rnd';

import useStickRightActive from './use-stick-right-active';

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
  if (useStickRightActive()) {
    return onlyLeft;
  }
}
