import { EAction } from '../const';
export default function actionUpdateProps(payload) {
  return {
    type: EAction.UPDATE_PROPS,
    payload: payload
  };
}