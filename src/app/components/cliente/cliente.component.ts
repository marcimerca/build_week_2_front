import { Cliente, ClienteResponse } from './../../models/cliente.interface';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { AuthData } from 'src/app/models/auth-data.interface';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{


  user!: AuthData;
  
  isAdmin: boolean = false; // Set this based on your authentication logic

 

  clienti!: Cliente[];
  constructor(private clienteSrv: ClienteService ) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    // this.isAdmin = this.user.ruolo === 'ADMIN'; // Assumendo che il ruolo sia salvato come 'ruolo' nell'oggetto utente
  
    this.clienteSrv.getCliente().subscribe((data)=>{
      console.log(data);
      this.clienti = data.content;
    });
  }

  

 /*  editCliente(cliente: any) {
    // Logic to edit cliente
    console.log('Editing cliente', cliente);
  }

  deleteCliente(clienteId: number) {
    // Logic to delete cliente
    this.clienti = this.clienti.filter(cliente => cliente. !== clienteId);
    console.log('Deleted cliente with id', clienteId);
  } */

  addCliente() {
    
  }

  open(content: any) {
   // this.modalService.open(content);
}

}

