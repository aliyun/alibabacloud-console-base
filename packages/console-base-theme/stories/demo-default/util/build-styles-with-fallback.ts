import buildCssVarName from './build-css-var-name';
import buildInterpolation from './build-interpolation';

export default function buildStylesWithFallback(prop: string, whatObj: string, key: string, left = ''): string {
  const varInterpolation = buildInterpolation(whatObj, key);
  
  return [
    `${prop}: ${left}${varInterpolation};`,
    `${prop}: ${left}var(${buildCssVarName(whatObj, key)}, ${varInterpolation});`
  ].join('\n');
}
