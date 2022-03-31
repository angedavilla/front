import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { FormsService } from '../../services/form/forms.service';
import { IUsuario } from 'src/app/interface/i-usuario';
import { IResponse } from '../../interface/i-response';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public form : FormGroup;

  constructor(
    private UsuariosService: UsuariosService,
    private FormsService: FormsService,
    private Router: Router
    ) {
      this.form = this.FormsService.formUsuarios();
     }

  ngOnInit(): void {
  }
  

  saveData(): void {

    const data: Array <IUsuario> = [{
      nombre: this.form.controls['nombre'].value,
      apellido: this.form.controls['apellido'].value,
      email: this.form.controls['email'].value,
      fecha_de_cumpleanos: this.form.controls['fecha_de_cumpleanos'].value,
      estado: this.form.controls['estado'].value,
    }];
   

    this.UsuariosService.addPersona(data).then((res: IResponse) => {
      console.log(res);
    });

  }
}
