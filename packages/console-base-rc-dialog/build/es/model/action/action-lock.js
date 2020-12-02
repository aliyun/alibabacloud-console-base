import { EAction } from '../const';
export default function actionLock(loading) {
  return {
    type: EAction.LOCK,
    payload: loading
  };
}