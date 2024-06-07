import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/models/cliente.interface';
import { FatturaService } from 'src/app/service/fattura.service';
import { Fattura } from 'src/app/models/fattura.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.scss'],
})
export class ClienteDetailsComponent implements OnInit {
  cliente!: Cliente;
  fatture: Fattura[]=[];

  constructor(private clienteSrv: ClienteService, private fatturaSrv: FatturaService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.clienteSrv.getSpecificCliente(id).subscribe((data) => {
        this.cliente = data;
      });
      this.fatturaSrv.getFatturaByCliente(id).subscribe((data)=>{
      console.log(data);
      this.fatture = data.content;
    
    });
  
    });

    
  }

  addFattura(form: NgForm) {
  
}

}

/* this.fatturaSrv.getFattura().subscribe((data)=>{
      console.log(data);
      this.fatture = data.content;
    
    }); */

// let clienti: Cliente[] = [];
//         clienti = data.content;
//        this.cliente = clienti.find(cliente1 => cliente1.id === id)

// this.clienteSrv.getCliente().subscribe((data)=>{
//       console.log(data);
//       this.clienti = data.content;
//     });
