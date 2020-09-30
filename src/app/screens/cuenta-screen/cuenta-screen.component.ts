import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/user/usuario.service';

@Component({
  selector: 'app-cuenta-screen',
  templateUrl: './cuenta-screen.component.html',
  styleUrls: ['./cuenta-screen.component.css']
})
export class CuentaScreenComponent implements OnInit {
  public usuarios: Usuario[] ;
  public correoLogin:FormControl ;
  
  public passwordLogin:FormControl ;

  public observableCorreoLogin$: Observable<string> ;
  public observablePasswordLogin$: Observable<string> ;

  public usuario: Usuario ;

  constructor(private usuarioServices: UsuarioService) { 

  }

  ngOnInit(): void {
    this.usuarios = this.usuarioServices.getAllUsuarios() ;

  }

 

}
