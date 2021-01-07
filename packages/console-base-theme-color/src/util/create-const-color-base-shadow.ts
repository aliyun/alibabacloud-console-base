import {
  IColorEssential,
  IColorShadow
} from '../types';

export default function createConstColorBaseShadow(E: IColorEssential): IColorShadow {
  return {
    SHADOW: E.SHADOW
  };
}
