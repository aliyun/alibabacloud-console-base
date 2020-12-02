export interface ISettingsToolkitItemLabel {
    icon?: 'survey' | 'qr' | 'dingding';
    html?: string;
    text?: string;
}
export interface ISettingsToolkitItemTooltip {
    html?: string;
    text?: string;
    light?: boolean;
    width?: number;
    closable?: boolean;
}
export interface ISettingsToolkitItem {
    id: string;
    label?: string | ISettingsToolkitItemLabel;
    tooltip?: string | ISettingsToolkitItemTooltip;
    href?: string;
    target?: string;
    unread?: number;
    priority?: number;
    doActive?: boolean;
    active?: boolean;
    fixed?: boolean;
}
export interface ISettingsToolkit {
    contact?: boolean;
    api?: Record<string, unknown> | null | boolean;
    version?: 'old' | 'new' | null | boolean;
    customTools?: ISettingsToolkitItem[];
}
