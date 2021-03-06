import './missing/gfm-html';
import './missing/directive';
import './missing/directive-html';

import {
  SyntaxExtension,
  HtmlExtension
} from 'micromark/dist/shared-types';

export interface IPlugin {
  syntax: SyntaxExtension;
  html: HtmlExtension;
}

export interface IProps {
  source: string;
  allowDangerousHtml?: boolean;
}
