import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { FatturaResponse } from '../models/fattura.interface';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  apiUrL = environment.apiURL;
  constructor(private http:HttpClient) {   }

  getFattura(){
    return this.http.get<FatturaResponse>(`${this.apiUrL}fatture`);
    }

    // postFattura(fattura: Fattura): Observable<Fattura> {
    //   return this.http.post<Fattura>(`${this.apiUrl}/fatture`, fattura);
    // }
}
