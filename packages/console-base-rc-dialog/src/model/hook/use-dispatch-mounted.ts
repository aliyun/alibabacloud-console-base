import {
  useCallback
} from 'react';

import {
  actionDidMount
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchMounted(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionDidMount()), [dispatch]);
}
