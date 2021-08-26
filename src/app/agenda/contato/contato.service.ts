import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {


  constructor() { }
  
  CONTATOS: Contato[] = [
    {
      id!: 1,
      nome!:"João",
      email!:"joao@joao.com",
      celular!: 7199887766
    },

    {
      id!: 2,
      nome!:"Maria",
      email!:"maria@maria.com.br",
      celular!: 1199556652
    },

    {
      id!: 3,
      nome!:"Fulano",
      email!:"Fulano@fulano.com.br",
      celular!: 8195441234
    },
  ]

  listarContatos():Contato[]{
    return this.CONTATOS;
  }
}
