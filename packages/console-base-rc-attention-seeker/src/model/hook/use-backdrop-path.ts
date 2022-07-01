import useRect from './use-rect';

export default function useBackdropPath(): string {
  const {
    left: x,
    top: y,
    width,
    height,
    radius
  } = useRect();
  const {
    innerWidth: X,
    innerHeight: Y
  } = window;
  
  // 关于 Path Commands https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
  return `M${X},${Y}\
H0\
V0\
H${X}\
V${Y}\
Z\
M${x + radius},${y}\
${radius ? `a${radius},${radius},0,0,0-${radius},${radius}` : ''}\
V${height + y - radius}\
${radius ? `a${radius},${radius},0,0,0,${radius},${radius}` : ''}\
H${width + x - radius}\
${radius ? `a${radius},${radius},0,0,0,${radius}-${radius}` : ''}\
V${y + radius}\
${radius ? `a${radius},${radius},0,0,0-${radius}-${radius}` : ''}\
Z`;
}