import { roleTypeEnum } from "../enums/roleTypeEnum";

export interface Usuario {
    nome: string;
    cpf: string;
    tel: string;
    dataNascimento: string;
    endereco: string;
    nivelFormacao: string;
    email: string;
    senha: string;
    role: roleTypeEnum;
    areaEspecializacao?: string; // Campo opcional para professor
  }
  