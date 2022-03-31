import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsService } from './services/form/forms.service';
import { UsuariosService } from './services/usuarios/usuarios.service';
import { AddComponent } from './Usuarios/add/add.component';
import { EditComponent } from './Usuarios/edit/edit.component';
import { ListarComponent } from './Usuarios/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuariosService, FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
