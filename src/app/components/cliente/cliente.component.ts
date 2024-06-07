import { Provincia } from './../../models/fattura.interface';
import { AnagrafeService } from './../../service/anagrafe.service';
import { Cliente, ClienteResponse } from './../../models/cliente.interface';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { AuthData } from 'src/app/models/auth-data.interface';
import { NgForm } from '@angular/forms';
import { Comune } from 'src/app/models/anagrafica.interface';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{


  user!: AuthData;
  
  isAdmin: boolean = false; // Set this based on your authentication logic

  anagraficaOn: boolean = false;
  anagrafica: Comune[] = [];
  clienti!: Cliente[];
  constructor(private clienteSrv: ClienteService, private anagrafeSrv:AnagrafeService ) { } 
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  
    this.clienteSrv.getCliente().subscribe((data)=>{
      console.log(data);
      this.clienti = data.content;
    });
    this.anagrafeSrv.getAnagrafe().subscribe((data)=>{
      console.log(data);
      this.anagrafica = data;
      
    });
   
   
  }

  addCliente(form: NgForm) {
    const dataDiOggi = new Date();
    const datiDaInviare = {
      ...form.value,
      dataInserimento: dataDiOggi
    };

    console.log(datiDaInviare);
    this.clienteSrv.postCliente(datiDaInviare).subscribe(() => {
      this.clienteSrv.getCliente().subscribe((data) => {
        this.clienti = data.content;
      });
    });
    
    this.clienteSrv.getCliente().subscribe((data)=>{
      console.log(data);
      this.clienti = data.content;
    });
    let province=this.anagrafica.filter((data)=>{ console.log(data);
     });
 
    
    this.anagraficaOn = true;
   
   
  }

  addIndirizzi(form: NgForm) {
    
  }

  


}

