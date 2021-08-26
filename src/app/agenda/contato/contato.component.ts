import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  _buscar!:string;

  arrayContatos2: Contato[] = [];

  arrayContatos: Contato[] = [];

 
  constructor(private contatoService: ContatoService) { 
    this.arrayContatos = contatoService.listarContatos();
    this.arrayContatos2 = this.arrayContatos;
  }

  ngOnInit(): void {
  }

  set buscar(value: string){
    this._buscar = value;

    this.arrayContatos2 = this.arrayContatos.filter((contato: Contato) => 
    contato.nome.toLocaleLowerCase().indexOf(this._buscar.toLocaleLowerCase()) > -1);
  }

  get buscar(){
    return this._buscar;
  }

}
