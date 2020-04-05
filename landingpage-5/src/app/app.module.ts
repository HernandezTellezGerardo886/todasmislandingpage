import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './inicio/header/header.component';
import { SobreNosotrosComponent } from './inicio/sobre-nosotros/sobre-nosotros.component';
import { ProductosServiciosComponent } from './inicio/productos-servicios/productos-servicios.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { ContactoComponent } from './inicio/contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoMasNuevoComponent } from './inicio/lo-mas-nuevo/lo-mas-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreNosotrosComponent,
    ProductosServiciosComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    LoMasNuevoComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
