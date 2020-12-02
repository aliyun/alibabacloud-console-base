import update from 'immutability-helper';
export default function reduceToggleVisible(state, payload) {
  return update(state, {
    visible: {
      $set: payload
    }
  });
}