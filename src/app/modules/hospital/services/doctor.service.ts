import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBySpecialty(specialty:string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + 'api/Doctor/specialty/'+specialty, { headers: this.headers });
  }


}