import {
  get as _get
} from 'lodash-es';

import {
  BlockReason
} from '../../../data';

import useOpDialog from './use-op-dialog';

export default function useBlockReason(): BlockReason {
  const {
    data: {
      sourceError
    }
  } = useOpDialog();
  
  return _get(sourceError, 'responseData.data.reason', BlockReason.NORMAL);
}
