interface IValues<T> {
  valueNormal: T;
  valueHovered?: T;
  valueActive?: T;
  valueActiveHovered?: T;
}

export default function getValueByStatus<T>(values: IValues<T>, hovered?: boolean, active?: boolean): T {
  const {
    valueNormal,
    valueHovered,
    valueActive,
    valueActiveHovered
  } = values;
  
  if (hovered && active) {
    return valueActiveHovered ?? valueActive ?? valueNormal;
  }
  
  if (active) {
    return valueActive ?? valueNormal;
  }
  
  if (hovered) {
    return valueHovered ?? valueNormal;
  }
  
  return valueNormal;
}