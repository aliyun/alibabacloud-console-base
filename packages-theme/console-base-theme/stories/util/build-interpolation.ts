/**
 * css var 不能这么用：
 * 
 * `border-radius: var(--cb-size-border-radius-m)px;` 它的结果可能是 `4 px`，于是「Invalid property value」，因为空格在 CSS 中扮演着很重要的语法角色
 * 
 * 所以 `--cb-size-border-radius-m` 的值必须是带单位的 `4px` 而不能是 `4`
 */
export default function buildInterpolation(parts: string[], unit = ''): string {
  const [category, ...leftParts] = parts;
  const constName = `${category}.${leftParts.filter(v => v).join('_')}`.toUpperCase();
  
  return `\${${constName}}${unit}`;
}
