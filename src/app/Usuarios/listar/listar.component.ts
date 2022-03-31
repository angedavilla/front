import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { IUsuario } from '../../interface/i-usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public usuarios: any = [];

  constructor(
    private UsuariosService: UsuariosService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.UsuariosService.getUsuarios().then((res: any) => {
      this.usuarios = res;
      console.log(this.usuarios);
    });
  }

  Editar() {

  }

  Eliminar(index: any){
    this.UsuariosService.deleteUsuario(index).then((res: any) => {
      console.log(res);
      this.UsuariosService.getUsuarios().then((res: any) => {
        this.usuarios = res;
        console.log(this.usuarios);
      });
    })
  }


}
