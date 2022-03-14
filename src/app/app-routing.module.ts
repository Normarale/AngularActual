import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BoardAdminComponent } from './componenteslogin/board-admin/board-admin.component';
import { BoardModeratorComponent } from './componenteslogin/board-moderator/board-moderator.component';
import { BoardUserComponent } from './componenteslogin/board-user/board-user.component';
import { LoginComponent } from './componenteslogin/login/login.component';
import { ProfileComponent } from './componenteslogin/profile/profile.component';
import { RegisterComponent } from './componenteslogin/register/register.component';


const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'acerca', component:AcercaComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'contacto', component:ContactoComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'user', component: BoardUserComponent },
  {path: 'mod', component: BoardModeratorComponent },
  {path: 'admin', component: BoardAdminComponent },
  {path:'**' , redirectTo:'login', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
