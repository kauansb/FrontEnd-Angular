import { roleTypeEnum } from "../enums/roleTypeEnum";

export interface Login{
    email: string;
    senha: string;
    role: roleTypeEnum;
}