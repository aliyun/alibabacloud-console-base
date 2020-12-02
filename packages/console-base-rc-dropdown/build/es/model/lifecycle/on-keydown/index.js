import { useEffect, useCallback } from 'react';
import { useProps, useVisible, useDispatchToggleVisible } from '../../hook';
export default function OnKeydown() {
  var _useProps = useProps(),
      onEsc = _useProps.onEsc,
      onNavUp = _useProps.onNavUp,
      onNavDown = _useProps.onNavDown;

  var visibleFinal = useVisible();
  var dispatchToggleVisible = useDispatchToggleVisible();
  var handleDocKeyDown = useCallback(function (e) {
    switch (e.key) {
      case 'Escape':
        dispatchToggleVisible(false);

        if (onEsc) {
          onEsc();
        }

        break;

      case 'ArrowDown':
        if (onNavDown) {
          e.preventDefault();
          onNavDown();
        }

        break;

      case 'ArrowUp':
        if (onNavUp) {
          e.preventDefault();
          onNavUp();
        }

        break;

      default:
        break;
    }
  }, [dispatchToggleVisible, onEsc, onNavUp, onNavDown]);
  useEffect(function () {
    if (visibleFinal) {
      document.addEventListener('keydown', handleDocKeyDown);
    }

    return function () {
      return document.removeEventListener('keydown', handleDocKeyDown);
    };
  }, [visibleFinal, handleDocKeyDown]);
  return null;
}