import { EAction } from '../const';
export default function actionSetZIndex(zIndex) {
  return {
    type: EAction.SET_Z_INDEX,
    payload: zIndex
  };
}