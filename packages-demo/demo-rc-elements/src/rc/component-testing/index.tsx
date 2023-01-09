import _isEmpty from 'lodash/isEmpty';
import React, {
  useState,
  useMemo
} from 'react';

import {
  json5Stringify
} from '../../util';
import {
  IComponentTestingProcessPropsFn,
  IComponentTestingProps
} from '../../types';
import Flex from '../flex';
import {
  H2
} from '../h1234';
import InputJsonObject from '../input-json-object';
import CodeViewerJs from '../code-viewer-js';

function composeProps<P>(o0: Record<string, unknown>, processProps?: IComponentTestingProcessPropsFn<P>): P {
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
 * 测试组件用，根据传入的参数生成代码
 */
export default function ComponentTesting<P>({
  componentName,
  componentPackageName,
  componentIsDefaultExport = true,
  defaultProps = {},
  processProps,
  renderer
}: IComponentTestingProps<P>): JSX.Element {
  const [stateProps, setStateProps] = useState<Record<string, unknown>>(defaultProps);
  const componentProps: P = useMemo(() => composeProps<P>(stateProps, processProps), [stateProps, processProps]);
  const generatedCode = useMemo((): string => {
    const codeImport = componentIsDefaultExport ? `import ${componentName} from '${componentPackageName}';` : `import {
  ${componentName}
} from '${componentPackageName}';`;
    const codeMyComponentReturn = _isEmpty(componentProps) ? `<${componentName} />` : `<${componentName} {...${json5Stringify(componentProps).replace(/\n/g, '\n  ')}} />`;
    
    return `${codeImport}

export default function My${componentName}(): JSX.Element {
  return ${codeMyComponentReturn};
}`;
  }, [componentName, componentPackageName, componentIsDefaultExport, componentProps]);
  
  return <Flex>
    {renderer ? <>
      <H2>Render</H2>
      {renderer(componentProps)}
    </> : null}
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
