import { EAccountType } from '../enum';
export interface IWin extends Window {
    ALIYUN_ECS_CONSOLE_CONFIG?: {
        CURRENT_PK: string;
        MASTER_PK: string;
        isChildAccount: boolean;
        isRoleAccount: boolean;
    };
}
export interface IConfAccount {
    ID: string;
    ID_MAIN: string;
    TYPE: EAccountType;
}
