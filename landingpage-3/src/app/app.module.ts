import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './inicio/encabezado/encabezado.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { NavBarPredComponent } from './inicio/nav-bar-pred/nav-bar-pred.component';
import { ArticuloComponent } from './inicio/articulo/articulo.component';
import { InfografiasComponent } from './inicio/infografias/infografias.component';
import { MiContactoComponent } from './contacto/mi-contacto/mi-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    NavBarPredComponent,
    ArticuloComponent,
    InfografiasComponent,
    MiContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
