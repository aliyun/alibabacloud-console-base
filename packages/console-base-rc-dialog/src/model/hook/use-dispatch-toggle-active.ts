import {
  useCallback
} from 'react';

import {
  actionActivate,
  actionDeactivate
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchToggleActive(): (active: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((active: boolean) => dispatch(active ? actionActivate() : actionDeactivate()), [dispatch]);
}
