import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Palestra {
  id: number;
  titulo: string;
  descricao: string;
  nomePalestrante: string;
  localEvento: string;
  dataEvento: string;
}

@Injectable({
  providedIn: 'root',
})
export class PalestraApi {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/api/palestras';

  listarPalestra(): Observable<Palestra[]> {
    return this.http.get<Palestra[]>(this.apiUrl);
  }
}
