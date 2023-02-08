import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

interface IScProps {
  'aria-checked': boolean;
  disabled?: boolean;
}

export default function getStyledSwitchBg(props: IScProps): FlattenSimpleInterpolation {
  if (props.disabled) {
    return css`
      background-color: #ccc;
    `;
  }
  
  return props['aria-checked'] ? css`
    background-color: #090;
  ` : css`
    background-color: #369;
  `;
}