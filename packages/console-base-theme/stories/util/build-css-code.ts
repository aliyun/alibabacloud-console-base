import buildCssVarName from './build-css-var-name';
import buildInterpolation from './build-interpolation';

interface IParams {
  attr: string;
  keys: string[];
  indent?: number; // 缩进层级
  before?: string;
  after?: string;
}

const INDENT = '  ';

/**
 * IE 兼容的 css 代码
 */
export default function buildCssCode({
  attr,
  keys,
  before = '',
  after = '',
  indent = 1
}: IParams): string {
  const varInterpolation = buildInterpolation(...keys);
  const leftPart = `${INDENT.repeat(indent)}${attr}: ${before}`;
  
  return [
    `${leftPart}${varInterpolation}${after};`,
    `${leftPart}var(${buildCssVarName(...keys)}, ${varInterpolation})${after};`
  ].join('\n');
}
