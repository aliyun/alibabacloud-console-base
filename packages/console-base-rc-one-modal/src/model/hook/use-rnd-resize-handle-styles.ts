import {
  HandleStyles
} from 'react-rnd';

import {
  EModalMode
} from '../../const';

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
  const mode = useMode();
  
  if (mode === EModalMode.TO_THE_RIGHT || mode === EModalMode.TO_THE_RIGHT_PINNED) {
    return onlyLeft;
  }
}
