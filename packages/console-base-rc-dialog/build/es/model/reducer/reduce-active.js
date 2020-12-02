import update from 'immutability-helper';

/**
 * 用于触发 CSS 动画
 */
export default function reduceActive(state, payload) {
  return update(state, {
    active: {
      $set: payload
    }
  });
}