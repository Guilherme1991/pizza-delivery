import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Send } from '../models/send.model';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/transferencia';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SendService {
  // [x: string]: any;
  constructor(private http: HttpClient) { }

  sendTable(nome: string, pizza: string): Observable<Send> {
    return this.http.post<Send>('http://localhost:3000/transferencia', {
      name: nome,
      pizzaType: pizza
    }
    )
  }
  getData(): Observable<Send[]> {
    return this.http.get<Send[]>('http://localhost:3000/transferencia');
  }
  delData(id: number): Observable<any> {
    const url = `${URL}/${id}`;
    return this.http.delete(url);
  }
}

