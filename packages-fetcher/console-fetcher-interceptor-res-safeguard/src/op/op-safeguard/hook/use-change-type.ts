import {
  SafeguardErrorCode,
  ChangeType
} from '../../../data';

import useOpDialog from './use-op-dialog';

export default function useChangeType(): ChangeType {
  const {
    data: {
      sourceError
    }
  } = useOpDialog();
  
  return sourceError.code === SafeguardErrorCode.CF ? ChangeType.CF : ChangeType.CM;
}
