import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';
import {
  parseToRgb,
  rgb,
  rgba
} from 'polished';

import {
  PartR,
  PartG,
  PartB,
  PartA,
  PartComplete
} from './_parts';

interface IRgba {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface IProps {
  rgbaMode?: boolean;
  value?: IRgba;
  onChange?(value: IRgba, color: string): void;
}

const ScColor = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
`;

const ScColorFn = styled.span`
  color: rgba(0, 0, 0, 0.7);
`;

export default function InputColor({
  rgbaMode,
  value,
  onChange
}: IProps): JSX.Element {
  const [stateValue, setStateValue] = useState<IRgba>(value || {
    r: 128,
    g: 0,
    b: 128,
    a: 0.2
  });
  const computeColor = useCallback((o: IRgba): string => {
    return rgbaMode ? rgba(o.r, o.g, o.b, o.a) : rgb(o.r, o.g, o.b);
  }, [rgbaMode]);
  const handleValueChange = useCallback((o: Partial<IRgba>): void => {
    const newValue: IRgba = {
      ...stateValue,
      ...o
    };
    
    setStateValue(newValue);
    
    if (onChange) {
      onChange(newValue, computeColor(newValue));
    }
  }, [onChange, computeColor, stateValue]);
  const finalValue: IRgba = value ?? stateValue;
  const finalColorString = computeColor(finalValue);
  const handleRChange = useCallback((n: number) => handleValueChange({
    r: n
  }), [handleValueChange]);
  const handleGChange = useCallback((n: number) => handleValueChange({
    g: n
  }), [handleValueChange]);
  const handleBChange = useCallback((n: number) => handleValueChange({
    b: n
  }), [handleValueChange]);
  const handleAChange = useCallback((n: number) => handleValueChange({
    a: n
  }), [handleValueChange]);
  const handleCompleteChange = useCallback((completeColorString: string) => {
    const {
      red: r,
      green: g,
      blue: b,
      alpha: a
    } = parseToRgb(completeColorString) as unknown as { red: number; green: number; blue: number; alpha: number; }; // 它的定义有问题
    const o: IRgba = {
      r,
      g,
      b
    };
    
    if (rgbaMode) {
      o.a = a || 1;
    }
    
    handleValueChange(o);
  }, [handleValueChange, rgbaMode]);
  
  return <ScColor style={{
    backgroundColor: finalColorString
  }}>
    <PartR value={finalValue.r} onChange={handleRChange} />
    <PartG value={finalValue.g} onChange={handleGChange} />
    <PartB value={finalValue.b} onChange={handleBChange} />
    {rgbaMode ? <PartA value={finalValue.a} onChange={handleAChange} /> : null}
    <ScColorFn>→</ScColorFn>
    <PartComplete {...{
      value: finalColorString,
      onChange: handleCompleteChange
    }} />
  </ScColor>;
}

export type {
  IRgba
};
