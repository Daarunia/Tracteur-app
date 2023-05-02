import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { environment } from './../../../environments/environment';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  get() : Observable<Student[]>{
    return this.http.get<Student[]>(environment.iutApiBaseUrl+"/student");
  }

  getById(id: number) : Observable<Student>{
    return this.http.get<Student>(environment.iutApiBaseUrl+"/student/" + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.iutApiBaseUrl + '/student/' + id);
  }

  update(student: Student): Observable<string>{
    return this.http.put<string>(environment.iutApiBaseUrl+"/student/"+student.id, student);
  }

  create(student: Student): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/student", student);
  }
}
