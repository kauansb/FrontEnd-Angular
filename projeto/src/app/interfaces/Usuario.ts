export interface Usuario {
    nome: string;
    cpf: string;
    tel: string;
    dataNascimento: string;
    endereco: string;
    nivelFormacao: string;
    email: string;
    areaEspecializacao?: string; // Campo opcional para professor
  }
  