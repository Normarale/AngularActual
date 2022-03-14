import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NabVarComponent } from './componentes/nab-var/nab-var.component';
import { CargarSkilService } from './servicios/cargar-skil.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardAdminComponent } from './componenteslogin/board-admin/board-admin.component';
import { BoardModeratorComponent } from './componenteslogin/board-moderator/board-moderator.component';
import { BoardUserComponent } from './componenteslogin/board-user/board-user.component';
import { LoginComponent } from './componenteslogin/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RegisterComponent } from './componenteslogin/register/register.component';
import { ProfileComponent } from './componenteslogin/profile/profile.component';
import { NavLoginComponent } from './componenteslogin/nav-login/nav-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    EstudiosComponent,
    ExperienciaComponent,
   ContactoComponent,
   FooterComponent,
   NabVarComponent,
   BoardAdminComponent,
   BoardModeratorComponent,
   BoardUserComponent,
   LoginComponent,
   RegisterComponent,
   ProfileComponent,
   NavLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    CargarSkilService,
    authInterceptorProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
