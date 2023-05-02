import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marque } from '../models/marque';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class MarqueService {

  constructor(private http: HttpClient) {}

  get() : Observable<Marque[]>{
    return this.http.get<Marque[]>(environment.tracteurApiUrl+"/marques");
  }

  getById(id: number) : Observable<Marque>{
    return this.http.get<Marque>(environment.tracteurApiUrl+"/marques/" + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.tracteurApiUrl + '/marques/' + id);
  }

  update(marque: Marque): Observable<string>{
    return this.http.put<string>(environment.tracteurApiUrl+"/marques/"+marque.id, marque);
  }

  create(marque: Marque): Observable<string>{
    return this.http.post<string>(environment.tracteurApiUrl+"/marques", marque);
  }
}
