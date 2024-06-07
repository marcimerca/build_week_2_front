import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data.interface';
import { Fattura, FatturaResponse } from './../../models/fattura.interface';
import { FatturaService } from 'src/app/service/fattura.service';

@Component({
  selector: 'app-fattura',
  templateUrl: './fattura.component.html',
  styleUrls: ['./fattura.component.scss']
})
export class FatturaComponent {

  Fattura!: AuthData; 

  isAdmin: boolean = false; // Set this based on your authentication logic

  fatture!: Fattura[];

  constructor(private fatturaSrv: FatturaService) { }
  ngOnInit(): void {
    this.Fattura = JSON.parse(localStorage.getItem('fattura') || '{}');
    // this.isAdmin = this.user.ruolo === 'ADMIN'; // Assumendo che il ruolo sia salvato come 'ruolo' nell'oggetto utente
  
    this.fatturaSrv.getFattura().subscribe((data)=>{
      console.log(data);
      this.fatture = data.content;
    
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

  // addCliente() {
  //   this.clienti.push(newCliente);
  //   console.log('Added new cliente', newCliente);
  // }



  
  // ------------
  // addFattura(form: NgForm) {
  //   if (form.valid) {
  //     this.fatturaSrv.postFattura(form.value).subscribe(() => {
  //       this.fetchFatture();
  //       form.reset();
  //       const modalElement = document.getElementById('addFatturaModal');
  //       if (modalElement) {
  //         const modalInstance = bootstrap.Modal.getInstance(modalElement);
  //         modalInstance?.hide();
  //       }
  //     });
  //   }
  // }

  // fetchFatture() {
  //   this.fatturaSrv.getFattura().subscribe((data: FatturaResponse) => {
  //     this.fatture = data.content;
  //   });
  // }

}
