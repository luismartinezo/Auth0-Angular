import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PreciosComponent } from './Components/precios/precios.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { ProfileComponent } from './Components/profile/profile.component';
import { TemplateComponent } from './Components/forms/template/template.component';
import { DataComponent } from './Components/forms/data/data.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'formtemplate', component: TemplateComponent },
  { path: 'formdata', component: DataComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardGuard]
  },
  { 
    path: 'protegida', 
    component: ProtegidaComponent, 
    canActivate: [AuthGuardGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
