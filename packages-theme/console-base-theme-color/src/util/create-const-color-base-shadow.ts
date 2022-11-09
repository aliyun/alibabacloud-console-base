import {
  IColorEssential,
  IColorShadow
} from '../types';

export default function createConstColorBaseShadow(colorEssential: IColorEssential): IColorShadow {
  return {
    SHADOW: colorEssential.SHADOW
  };
}
