import React, {
  useRef,
  useEffect
} from 'react';

import {
  append
} from '../../../src';

export default function PickMe(): JSX.Element {
  const refSpan = useRef<HTMLSpanElement | null>(null);
  
  useEffect(() => {
    if (refSpan.current) {
      return append(refSpan.current);
    }
  }, []);
  
  return <span ref={refSpan}>and i will get the attention</span>;
}
