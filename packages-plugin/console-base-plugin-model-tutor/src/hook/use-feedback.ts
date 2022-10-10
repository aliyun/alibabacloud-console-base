import {
  useMemo
} from 'react';

import useModelState from './_use-model-state';
import useOpenKey from './use-open-key';

interface IResult {
  rated: boolean | undefined;
  commented: boolean | undefined;
}

export default function useFeedback(): IResult {
  const openKey = useOpenKey();
  const {
    feedbackRated,
    feedbackCommented
  } = useModelState();
  
  return useMemo((): IResult => ({
    rated: feedbackRated[openKey],
    commented: feedbackCommented[openKey]
  }), [feedbackRated, feedbackCommented, openKey]);
}
