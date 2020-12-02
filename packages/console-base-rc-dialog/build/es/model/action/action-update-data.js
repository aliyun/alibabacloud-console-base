import { EAction } from '../const';
export default function actionUpdateData(payload) {
  return {
    type: EAction.UPDATE_DATA,
    payload: payload
  };
}