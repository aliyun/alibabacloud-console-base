import {
  IntlFactoryOptions as IntlFactoryOptionsBasic,
  FnIntlNumber,
  FnIntlDate
} from '@alicloud/console-base-intl-factory-basic';

export interface IIntlInstructions {
  html?: boolean;
  lines?: boolean;
}

export interface IIntlFactoryOptions extends IntlFactoryOptionsBasic {
  instructionSeparator?: string;
  htmlInstruction?: string;
  linesInstruction?: string;
}

export interface IFnIntl<O> {
  <V = void, T = string>(id: keyof O, values?: V, instructionsExtra?: IIntlInstructions): T;
  intlNumber: FnIntlNumber;
  intlDate: FnIntlDate;
}
