import {
  EButtonTheme,
  IModelProps
} from '../../model';

const THEMES_BLOCK: EButtonTheme[] = [
  EButtonTheme.MENU
];

export default function isBlock(props: IModelProps): boolean | undefined {
  return (props.theme && THEMES_BLOCK.includes(props.theme)) || props.block;
}
