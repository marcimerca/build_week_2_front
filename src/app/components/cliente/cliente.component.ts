import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import { AnagrafeService } from './../../service/anagrafe.service';
import { AuthData } from 'src/app/models/auth-data.interface';
import { Cliente, ClienteResponse } from './../../models/cliente.interface';
import { Comune, Provincia } from 'src/app/models/anagrafica.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  user!: AuthData;
  isAdmin: boolean = false;
  anagraficaOn: boolean = false;
  anagrafica: Comune[] = [];
  provinc: Provincia[] = [];
  clienti!: Cliente[];
  selectedProvince: string | null = null; 
  comuni: Comune[] = [];
selectedComune: any;

  constructor(private clienteSrv: ClienteService, private anagrafeSrv: AnagrafeService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.clienteSrv.getCliente().subscribe((data) => {
      console.log(data);
      this.clienti = data.content;
    });

    this.anagrafeSrv.getAnagrafe().subscribe((data) => {
      console.log(data);
      this.anagrafica = data;
      this.getProvince();
    });
  }

  addCliente(form: NgForm) {
  
    this.getProvince();
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
    
 
    
    this.anagraficaOn = true;
   
   
  }

  getProvince() {
    const province = this.anagrafica.map(comune => comune.provincia);
    const uniqueProvinces: Provincia[] = [];

    province.forEach(prov => {
      if (prov && prov.nomeProvincia) {
        const existingIndex = uniqueProvinces.findIndex(p => p.nomeProvincia === prov.nomeProvincia);
        if (existingIndex === -1) {
          uniqueProvinces.push(prov);
        }
      }
    });

    console.log(uniqueProvinces);
    this.provinc = uniqueProvinces;
  }

  selectProvince() {
    if (this.selectedProvince !== null) {
      console.log(this.selectedProvince);
      
      this.comuni = this.anagrafica.filter(comune => comune.provincia && comune.provincia.nomeProvincia === this.selectedProvince);
    } else {
      this.comuni = []; // Azzera l'array dei comuni se non viene selezionata alcuna provincia
    }
    console.log(this.comuni);
    
  }

  addIndirizzi(form: NgForm) {
    // Logica per aggiungere indirizzi
  }
}