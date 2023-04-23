import {
  EButtonTheme,
  IModelProps
} from '../../model';

const THEMES_TEXT_ALIGN_LEFT: EButtonTheme[] = [
  EButtonTheme.MENU
];

export default function getStyleTextAlign(props: Partial<IModelProps>): string {
  if (props.textAlign) {
    return props.textAlign;
  }
  
  if (props.theme && THEMES_TEXT_ALIGN_LEFT.includes(props.theme)) {
    return 'left';
  }
  
  return 'center';
}
