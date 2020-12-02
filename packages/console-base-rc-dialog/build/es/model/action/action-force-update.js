import { EAction } from '../const';
export default function actionForceUpdate() {
  return {
    type: EAction.FORCE_UPDATE
  };
}