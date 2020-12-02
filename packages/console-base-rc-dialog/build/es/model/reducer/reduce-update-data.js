import update from 'immutability-helper';

/**
 * 更新 data
 */
export default function reduceUpdateData(state, payload) {
  return update(state, {
    data: {
      $merge: payload
    }
  });
}