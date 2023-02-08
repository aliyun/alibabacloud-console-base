import buildCssVarName from './build-css-var-name';
import buildInterpolation from './build-interpolation';

interface IParams {
  attr: string;
  keys: string[];
  indent?: number; // 缩进层级
  before?: string;
  unit?: string;
}

const INDENT = '  ';

/**
 * IE 兼容的 css 代码
 */
export default function buildCssCode({
  attr,
  keys,
  before = '',
  unit = '',
  indent = 1
}: IParams): string {
  const varInterpolation = buildInterpolation(keys, unit);
  const leftPart = `${INDENT.repeat(indent)}${attr}: ${before}`;
  
  return [
    `${leftPart}${varInterpolation};`,
    `${leftPart}var(${buildCssVarName(...keys)}, ${varInterpolation});`
  ].join('\n');
}
