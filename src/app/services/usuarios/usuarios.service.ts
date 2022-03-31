import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../const/url';
import { IUsuario } from '../../interface/i-usuario';
import { IResponse } from '../../interface/i-response';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  public getUsuarios(): Promise<IUsuario> {
    return new Promise((resolved, rejected) => {
      this.http.get<IUsuario>(`${url}/usuarios`).subscribe((res: IUsuario) => {
        resolved(res);
      });
    });
  }

  public addPersona(data: Array<IUsuario>): Promise<IResponse> {
    return new Promise((resolved, rejected) => {
      this.http.post<IResponse>(`${url}/usuarios`, data).subscribe((res: IResponse) => {
        resolved(res);
      });
    });
  }

  public getUsuario(id: number): Promise<Object> {
    return new Promise((resolved, rejected) => {
      this.http.get(`${url}/usuarios/${id}`).subscribe((res: Object) => {
        resolved(res);
      });
    });
  }

  public deleteUsuario(id: number): Promise<Object> {
    return new Promise((resolved, rejected) => {
      this.http.delete(`${url}/usuarios/${id}`).subscribe((res: Object) => {
        resolved(res);
      });
    });
  }

 /*  public deleteUsuario(id: number){
    return this.http.delete(`${url}/usuarios/${id}`);
  } */

}
