import { IntlFactoryOptions as IntlFactoryOptionsBasic, FnIntl } from '@alicloud/console-base-intl-factory-basic';
export interface IIntlInstructions {
    html?: boolean;
    lines?: boolean;
}
export interface IIntlFactoryOptions extends IntlFactoryOptionsBasic {
    instructionSeparator?: string;
    htmlInstruction?: string;
    linesInstruction?: string;
}
export interface IFnIntl<K extends string> extends FnIntl<K> {
    <V = void, T = string>(id: K, values?: V, instructionsExtra?: IIntlInstructions): T;
}
