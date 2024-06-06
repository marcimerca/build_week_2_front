
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Cliente, ClienteResponse } from '../models/cliente.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrL = environment.apiURL;
  constructor(private http:HttpClient) {   }

  getCliente(){
    return this.http.get<ClienteResponse>(`${this.apiUrL}clienti`);
    }
  postCliente(cliente: Cliente){
    return this.http.post(`${this.apiUrL}clienti`,cliente);
  }

  

}
