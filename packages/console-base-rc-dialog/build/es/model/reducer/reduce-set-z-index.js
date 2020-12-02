import update from 'immutability-helper';

/**
 * 修改 zIndex
 */
export default function reduceSetZIndex(state, payload) {
  return update(state, {
    zIndex: {
      $set: payload
    }
  });
}