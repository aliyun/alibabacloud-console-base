import update from 'immutability-helper';
export default function reduceDidMount(state) {
  return update(state, {
    mounted: {
      $set: true
    }
  });
}