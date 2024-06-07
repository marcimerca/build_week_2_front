import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/models/cliente.interface';

@Component({
  selector: 'cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.scss'],
})
export class ClienteDetailsComponent implements OnInit {
  cliente!: Cliente;

  constructor(private clienteSrv: ClienteService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.clienteSrv.getSpecificCliente(id).subscribe((data) => {
        this.cliente = data;
      });
    });
  }
}

// let clienti: Cliente[] = [];
//         clienti = data.content;
//        this.cliente = clienti.find(cliente1 => cliente1.id === id)

// this.clienteSrv.getCliente().subscribe((data)=>{
//       console.log(data);
//       this.clienti = data.content;
//     });
