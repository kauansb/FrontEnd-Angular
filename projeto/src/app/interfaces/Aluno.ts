export interface Aluno {
  id: number;
  nome: string;
  turma: string;
  disciplinas: number[]; // Array de IDs de disciplinas
  notas: {
    disciplina: string;
    n1: number;
    n2: number;
  }[];
  mf: number;
}
