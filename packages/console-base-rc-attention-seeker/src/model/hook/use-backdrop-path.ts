import useModelState from './_use-model-state';

export default function useBackdropPath(): string {
  const {
    attentionRect: {
      left: x,
      top: y,
      width,
      height,
      radius
    },
    viewportWidth,
    viewportHeight
  } = useModelState();
  
  // 关于 Path Commands https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
  return `M${viewportWidth},${viewportHeight}\
H0\
V0\
H${viewportWidth}\
V${viewportHeight}\
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