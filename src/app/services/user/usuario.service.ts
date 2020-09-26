import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario:Usuario;

  constructor() { 
    this.usuario.nombre ="Lol";
    this.usuario.numero ="Lol";
    this.usuario.rut ="Lol";
    this.usuario.apellidoP ="Lol";
    this.usuario.apellidoM ="Lol";
    this.usuario.direccion ="Lol";
    this.usuario.correo ="Lol";
    //this.usuario.fechaDeNacimiento =date.actual;
  }
}
