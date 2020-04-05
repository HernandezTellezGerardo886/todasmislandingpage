import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componente } from './componentes/mi componente/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    componente,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
