import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  public formUsuarios(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      fecha_de_cumpleanos: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      estado: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
  }
}
