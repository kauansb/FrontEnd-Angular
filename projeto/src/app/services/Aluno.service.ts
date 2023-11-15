import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../interfaces/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAlunos() {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  getAluno(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  criarAluno(aluno: any) {
    return this.http.post<any>(this.apiUrl, aluno);
  }
  
  atualizarAluno(id: number, aluno: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, aluno);
  }
  
  deletarAluno(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  
  
}
