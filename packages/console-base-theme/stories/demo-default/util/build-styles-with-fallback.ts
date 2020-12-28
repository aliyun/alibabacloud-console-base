import buildCssVarName from './build-css-var-name';

export default function buildStylesWithFallback(prop: string, whatObj: string, key: string, left = ''): [string, string] {
  const varInterpolation = `\${${whatObj}.${key}}`.toUpperCase();
  
  return [
    `${prop}: ${left}${varInterpolation};`,
    `${prop}: ${left}var(${buildCssVarName(whatObj, key)}, ${varInterpolation});`
  ];
}
