import update from 'immutability-helper';
export default function reduceUpdateWindowHeight(state) {
  return update(state, {
    windowHeight: {
      $set: window.innerHeight
    }
  });
}