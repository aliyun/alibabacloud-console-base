import { EAction } from '../const';
export default function actionToggleVisible(visible) {
  return {
    type: EAction.TOGGLE_VISIBLE,
    payload: visible
  };
}