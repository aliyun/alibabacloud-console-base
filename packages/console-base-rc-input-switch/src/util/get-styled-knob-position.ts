import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
}

export default function getStyledKnobPosition(props: IScProps): FlattenSimpleInterpolation {
  return props['aria-checked'] ? css`
    left: 100%;
    transform: translateX(-100%);
  ` : css`
    left: 0;
  `;
}