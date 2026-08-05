import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lancamento } from '../models/lancamento.models';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private readonly API = 'http://localhost:8080/api/lancamentos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(this.API);
  }

  salvar(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.post<Lancamento>(this.API, lancamento);
  }
}
