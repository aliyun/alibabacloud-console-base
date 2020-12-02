import update from 'immutability-helper';

/**
 * 强制更新以重新 render
 */
export default function reduceForceUpdate(state) {
  return update(state, {
    countForcedUpdate: {
      $set: state.countForcedUpdate + 1
    }
  });
}