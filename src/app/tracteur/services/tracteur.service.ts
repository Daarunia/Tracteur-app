import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tracteur } from '../models/tracteur';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class TracteurService {

  constructor(private http: HttpClient) {}

  get() : Observable<Tracteur[]>{
    return this.http.get<Tracteur[]>(environment.tracteurApiUrl+"/tracteurs");
  }

  getById(id: number) : Observable<Tracteur>{
    return this.http.get<Tracteur>(environment.tracteurApiUrl+"/tracteurs/" + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.tracteurApiUrl + '/tracteurs/' + id);
  }

  update(tracteur: Tracteur): Observable<string>{
    return this.http.put<string>(environment.tracteurApiUrl+"/tracteurs/"+tracteur.id, tracteur);
  }

  create(tracteur: Tracteur): Observable<string>{
    return this.http.post<string>(environment.tracteurApiUrl+"/tracteurs", tracteur);
  }
}

