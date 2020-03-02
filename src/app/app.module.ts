import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { PreciosComponent } from './Components/precios/precios.component';
import { ProtegidaComponent } from './Components/protegida/protegida.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { DataComponent } from './Components/forms/data/data.component';
import { FormsModule }   from '@angular/forms';
import { TemplateComponent } from './Components/forms/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    ProfileComponent,
    DataComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
