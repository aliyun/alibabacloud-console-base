import React, {
  useState,
  useMemo,
  useEffect
} from 'react';

import {
  json5Stringify
} from '../../util';
import Flex from '../flex';
import {
  H2
} from '../h1234';
import InputJsonObject from '../input-json-object';
import CodeViewerJs from '../code-viewer-js';

interface IFnProcessProps<P> {
  (props: P, o: Record<string, unknown>): void;
}

interface IProps<P> {
  componentName: string;
  componentPropsName: string;
  componentPackageName: string;
  defaultProps?: Record<string, unknown>;
  processProps?: IFnProcessProps<P>;
  onChange?(props: P): void;
}

function generateProps<P>(o0: Record<string, unknown>, processProps?: IFnProcessProps<P>): P {
  const o: Record<string, unknown> = {};
  
  Object.keys(o0).forEach(v => {
    if (!v.startsWith('/')) {
      o[v] = o0[v];
    }
  });
  
  const props = o as unknown as P;
  
  processProps?.(props, o0);
  
  return props;
}

/**
 * 测试组件用，展示 props 和 代码
 */
export default function PropsNCode<P>({
  componentName,
  componentPropsName,
  componentPackageName,
  defaultProps = {},
  processProps,
  onChange
}: IProps<P>): JSX.Element {
  const [stateProps, setStateProps] = useState<Record<string, unknown>>(defaultProps);
  
  const generatedCode = useMemo((): string => {
    return `import ${componentName}, {
  ${componentPropsName}
} from '${componentPackageName}';

const PROPS: ${componentPropsName} = ${json5Stringify(generateProps<P>(stateProps, processProps))};

export default function My${componentName}(): JSX.Element {
  return <${componentName} {...PROPS} />;
}`;
  }, [componentName, componentPackageName, componentPropsName, processProps, stateProps]);
  
  useEffect(() => {
    onChange?.(generateProps<P>(stateProps, processProps));
  }, [onChange, stateProps, processProps]);
  
  return <Flex>
    <>
      <H2>Props</H2>
      <InputJsonObject {...{
        value: stateProps,
        onChange: setStateProps
      }} />
    </>
    <>
      <H2>Code</H2>
      <CodeViewerJs>{generatedCode}</CodeViewerJs>
    </>
  </Flex>;
}
