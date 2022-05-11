import {
  ModelPropsButton,
  ModelPropsHelp
} from '../model';

export default function buildMenuHelp(help?: string | ModelPropsHelp): ModelPropsButton | null {
  if (!help) {
    return null;
  }
  
  let href;
  let title;
  
  if (typeof help === 'string') {
    href = help;
  } else {
    href = help.href;
    title = help.title;
  }
  
  if (!href) {
    return null;
  }
  
  return {
    key: 'help',
    label: {
      icon: 'help-circle'
    },
    href,
    title
  };
}
